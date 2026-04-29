export default function Aside({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm text-muted-foreground">
      {children}
    </span>
  );
}
