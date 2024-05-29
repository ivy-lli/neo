import { IvyIcons } from '@axonivy/ui-icons';
import { Button } from '@axonivy/ui-components';
import type { MetaFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import '@axonivy/ui-icons/lib/ivy-icons.css';
import '@axonivy/ui-components/lib/style.css';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix SPA' }, { name: 'description', content: 'Welcome to Remix (SPA Mode)!' }];
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <Button icon={IvyIcons.Process} size='large' onClick={() => navigate('processes')} />
    </div>
  );
}
