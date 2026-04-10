import { Search, X } from "lucide-react";
import {
  useDeferredValue,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import type { SearchEntry } from "../data/siteData";

type SearchOverlayProps = {
  entries: SearchEntry[];
  open: boolean;
  onClose: () => void;
};

function normalizeValue(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function SearchOverlay({
  entries,
  open,
  onClose,
}: SearchOverlayProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const closeOverlay = () => {
    setQuery("");
    onClose();
  };

  const closeOverlayFromEffect = useEffectEvent(() => {
    closeOverlay();
  });

  useEffect(() => {
    if (!open) {
      document.body.classList.remove("search-open");
      return;
    }

    document.body.classList.add("search-open");
    inputRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlayFromEffect();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("search-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const normalizedQuery = normalizeValue(deferredQuery.trim());
  const results = normalizedQuery
    ? entries.filter((entry) => {
        const haystack = normalizeValue(
          `${entry.title} ${entry.description} ${entry.keywords.join(" ")}`,
        );
        return haystack.includes(normalizedQuery);
      })
    : entries.slice(0, 8);

  if (!open) {
    return null;
  }

  return (
    <div className="search-overlay" role="dialog" aria-modal="true">
      <div className="search-overlay__backdrop" onClick={() => closeOverlay()} />
      <div className="search-overlay__panel">
        <div className="search-overlay__header">
          <div className="search-field">
            <Search size={18} />
            <input
              ref={inputRef}
              type="search"
              value={query}
              placeholder="Buscar páginas, cursos, equipo o recursos"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="icon-button"
            onClick={() => closeOverlay()}
            aria-label="Cerrar buscador"
          >
            <X size={18} />
          </button>
        </div>

        <div className="search-overlay__results">
          {results.length ? (
            results.map((entry) => (
              <button
                type="button"
                key={`${entry.href}-${entry.title}`}
                className="search-result"
                onClick={() => {
                  navigate(entry.href);
                  closeOverlay();
                }}
              >
                <span className="search-result__title">{entry.title}</span>
                <span className="search-result__description">
                  {entry.description}
                </span>
              </button>
            ))
          ) : (
            <div className="search-empty">
              <p>No encontramos coincidencias.</p>
              <span>Prueba con cursos, equipo, material o microscopía.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
