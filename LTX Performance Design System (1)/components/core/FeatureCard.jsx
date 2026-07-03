/**
 * FeatureCard — icon chip + title + body. Composes Card + FeatureChip.
 */
import React from 'react';
import { Card } from './Card.jsx';
import { FeatureChip } from './FeatureChip.jsx';

export function FeatureCard({ icon, title, body, hoverable = true, style, ...rest }) {
  return (
    <Card hoverable={hoverable} padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 20, ...style }} {...rest}>
      {icon ? <FeatureChip icon={icon} /> : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{
          fontFamily: 'var(--ltx-font-mono)',
          fontWeight: 700,
          fontSize: 18,
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
          color: 'var(--ltx-text-title)',
          margin: 0,
        }}>{title}</h3>
        <p style={{
          fontFamily: 'var(--ltx-font-sans)',
          fontSize: 14,
          lineHeight: 1.55,
          color: 'var(--ltx-text-body)',
          margin: 0,
        }}>{body}</p>
      </div>
    </Card>
  );
}
