import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sun, Moon, Check, KeyRound, Globe, Cpu, RefreshCw, AlertCircle, Mountain, Leaf, FlaskConical } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import type { Theme } from './ThemeProvider';

interface ApiConfig {
  apiKey: string;
  endpoint: string;
  model: string;
}

const DEFAULT_CONFIG: ApiConfig = {
  apiKey: '',
  endpoint: 'https://api.openai.com/v1/chat/completions',
  model: 'gpt-4o',
};

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function loadConfig(): ApiConfig {
  try {
    const raw = localStorage.getItem('pharmacist-api-config');
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_CONFIG, ...parsed };
    }
  } catch {
    // ignore
  }
  return { ...DEFAULT_CONFIG };
}

function deriveModelsUrl(endpoint: string): string {
  let url = endpoint.trim().replace(/\/$/, '');
  if (url.endsWith('/chat/completions')) {
    url = url.slice(0, -'/chat/completions'.length);
  }
  if (url.endsWith('/v1')) {
    return url + '/models';
  }
  return url + '/v1/models';
}

const THEME_META: { key: Theme; label: string; icon: React.ReactNode }[] = [
  { key: 'light', label: '浅色', icon: <Sun size={16} /> },
  { key: 'dark', label: '深色', icon: <Moon size={16} /> },
  { key: 'natgeo', label: 'NatGeo', icon: <Mountain size={16} /> },
  { key: 'nature', label: 'Nature', icon: <Leaf size={16} /> },
  { key: 'cell', label: 'Cell', icon: <FlaskConical size={16} /> },
];

export default function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const { theme, setTheme } = useTheme();
  const [config, setConfig] = useState<ApiConfig>(DEFAULT_CONFIG);
  const [saved, setSaved] = useState(false);
  const [models, setModels] = useState<string[]>([]);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    if (open) {
      const cfg = loadConfig();
      setConfig(cfg);
      setSaved(false);
      setModels([]);
      setFetchError('');
    }
  }, [open]);

  const update = (field: keyof ApiConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const save = () => {
    localStorage.setItem('pharmacist-api-config', JSON.stringify(config));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const fetchModels = async () => {
    setFetching(true);
    setFetchError('');
    setModels([]);
    try {
      const modelsUrl = deriveModelsUrl(config.endpoint);
      const res = await fetch(modelsUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      const list: string[] = (data.data || [])
        .map((m: any) => m.id || m.model || m.name)
        .filter(Boolean)
        .sort();
      if (list.length === 0) {
        throw new Error('未返回任何模型，请检查端点格式');
      }
      setModels(list);
      if (!list.includes(config.model)) {
        setConfig((prev) => ({ ...prev, model: list[0] }));
      }
    } catch (err: any) {
      setFetchError(err.message || '拉取失败');
    } finally {
      setFetching(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]" style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
        <DialogHeader>
          <DialogTitle className="font-chinese-serif text-xl" style={{ color: 'var(--ink)' }}>
            设置
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[60vh] overflow-y-auto pr-1">
          <div className="space-y-6 py-2">
            {/* Theme */}
            <div>
              <Label className="text-ui-sm mb-3 block" style={{ color: 'var(--ink-secondary)' }}>
                主题模式
              </Label>
              <div className="grid grid-cols-5 gap-2">
                {THEME_META.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTheme(t.key)}
                    className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-lg border transition-all duration-200 ${
                      theme === t.key
                        ? 'border-[var(--accent)] bg-[var(--accent-light)]'
                        : 'border-[var(--border)] hover:bg-[var(--paper-dark)]'
                    }`}
                  >
                    <span style={{ color: theme === t.key ? 'var(--accent-rust)' : 'var(--ink-tertiary)' }}>
                      {t.icon}
                    </span>
                    <span className="text-xs" style={{ color: theme === t.key ? 'var(--accent-rust)' : 'var(--ink-secondary)' }}>
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* API Config */}
            <div className="space-y-4">
              <Label className="text-ui-sm block" style={{ color: 'var(--ink-secondary)' }}>
                <span className="flex items-center gap-1.5">
                  <KeyRound size={14} />
                  AI API 配置
                </span>
              </Label>

              {/* Endpoint */}
              <div>
                <Label className="text-xs mb-1.5 block" style={{ color: 'var(--ink-tertiary)' }}>
                  <span className="flex items-center gap-1">
                    <Globe size={12} />
                    API 端点
                  </span>
                </Label>
                <Input
                  type="text"
                  placeholder="https://api.openai.com/v1/chat/completions"
                  value={config.endpoint}
                  onChange={(e) => update('endpoint', e.target.value)}
                  className="text-sm"
                  style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)', color: 'var(--ink)' }}
                />
              </div>

              {/* API Key */}
              <div>
                <Label className="text-xs mb-1.5 block" style={{ color: 'var(--ink-tertiary)' }}>
                  API Key
                </Label>
                <Input
                  type="password"
                  placeholder="sk-..."
                  value={config.apiKey}
                  onChange={(e) => update('apiKey', e.target.value)}
                  className="text-sm"
                  style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)', color: 'var(--ink)' }}
                />
              </div>

              {/* Model */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label className="text-xs" style={{ color: 'var(--ink-tertiary)' }}>
                    <span className="flex items-center gap-1">
                      <Cpu size={12} />
                      模型
                    </span>
                  </Label>
                  <button
                    onClick={fetchModels}
                    disabled={fetching || !config.endpoint}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors hover:bg-[var(--paper-dark)] disabled:opacity-40"
                    style={{ borderColor: 'var(--border)', color: 'var(--ink-tertiary)' }}
                  >
                    <RefreshCw size={12} className={fetching ? 'animate-spin' : ''} />
                    {fetching ? '拉取中...' : '拉取模型'}
                  </button>
                </div>

                {models.length > 0 ? (
                  <Select value={config.model} onValueChange={(v) => update('model', v)}>
                    <SelectTrigger
                      className="text-sm"
                      style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)', color: 'var(--ink)' }}
                    >
                      <SelectValue placeholder="选择模型" />
                    </SelectTrigger>
                    <SelectContent style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
                      {models.map((m) => (
                        <SelectItem key={m} value={m} className="text-sm">
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    type="text"
                    placeholder="gpt-4o"
                    value={config.model}
                    onChange={(e) => update('model', e.target.value)}
                    className="text-sm"
                    style={{ background: 'var(--paper-dark)', borderColor: 'var(--border)', color: 'var(--ink)' }}
                  />
                )}

                {fetchError && (
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs" style={{ color: '#C62828' }}>
                    <AlertCircle size={12} />
                    {fetchError}
                  </div>
                )}
              </div>

              <Button
                onClick={save}
                className="w-full transition-all"
                style={{ background: 'var(--accent-rust)', color: '#fff' }}
              >
                {saved ? (
                  <span className="flex items-center gap-2">
                    <Check size={16} /> 已保存
                  </span>
                ) : (
                  '保存配置'
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
