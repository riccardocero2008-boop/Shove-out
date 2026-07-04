export default function Home() {
  return (
    <iframe
      src="/game.html"
      title="SHOVE"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        display: 'block',
      }}
    />
  );
}
