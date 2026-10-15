import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFab({ label, message }: { label: string; message: string }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_8px_30px_rgba(5,44,59,0.25)] transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 2.4a10.6 10.6 0 1 1-5.5 19.7l-.8-.5-3.2.8.8-3.1-.5-.8A10.6 10.6 0 0 1 16 5.4Zm-4.5 5.2c-.3 0-.6.1-.8.4-.7.7-1 1.6-.8 2.6.4 2.4 2.7 5.2 5.1 6.5 2.2 1.2 3.8 1.7 4.9 1.1.7-.4 1.2-1.1 1.3-1.9.1-.3 0-.5-.3-.6l-2.6-1.3c-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.5-.6-3-1.9-3.7-3.2-.2-.3-.1-.5.1-.7l.7-.9c.2-.2.3-.5.1-.8l-1.1-2.4c-.1-.3-.3-.4-.5-.4h-1Z" />
      </svg>
    </a>
  );
}
