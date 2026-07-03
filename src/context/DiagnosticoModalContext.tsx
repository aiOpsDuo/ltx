import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface DiagnosticoModalContextValue {
  isOpen: boolean;
  source: string | null;
  openModal: (source: string) => void;
  closeModal: () => void;
}

const DiagnosticoModalContext = createContext<DiagnosticoModalContextValue | null>(null);

export function DiagnosticoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | null>(null);

  const openModal = useCallback((cta: string) => {
    // `source` identifies which CTA triggered the open — feeds the PRD §9
    // leading metric "taxa de abertura do modal por CTA" once analytics lands.
    setSource(cta);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, source, openModal, closeModal }), [isOpen, source, openModal, closeModal]);

  return <DiagnosticoModalContext.Provider value={value}>{children}</DiagnosticoModalContext.Provider>;
}

export function useDiagnosticoModal() {
  const ctx = useContext(DiagnosticoModalContext);
  if (!ctx) throw new Error('useDiagnosticoModal must be used within a DiagnosticoModalProvider');
  return ctx;
}
