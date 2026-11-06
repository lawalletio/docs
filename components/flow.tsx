import { Fragment } from 'react';

/** A one-line sequence diagram: actors in a row, labelled arrows between them. */
export function Flow({ steps }: { steps: [actor: string, arrow?: string][] }) {
  return (
    <div className="not-prose my-4 flex flex-wrap items-center gap-x-2 gap-y-3 rounded-xl border bg-fd-card p-4 text-sm">
      {steps.map(([actor, arrow], i) => (
        <Fragment key={i}>
          <span className="rounded-md border bg-fd-background px-2.5 py-1 font-medium">{actor}</span>
          {arrow && (
            <span className="flex flex-col items-center text-xs text-fd-muted-foreground">
              <span className="font-mono">{arrow}</span>
              <span aria-hidden>⟶</span>
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
