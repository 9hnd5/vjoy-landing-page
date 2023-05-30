"use client";

export default function Hero({ docs }: any) {
  return (
    <div>
      <h1>Home page</h1>
      {docs.map((doc: any) => (
        <p key={doc.id}>{doc.id}</p>
      ))}
    </div>
  );
}
