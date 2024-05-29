import { IvyIcons } from '@axonivy/ui-icons';
import { Button } from '@axonivy/ui-components';
import type { MetaFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import '@axonivy/ui-icons/lib/ivy-icons.css';
import '@axonivy/ui-components/lib/style.css';

export const meta: MetaFunction = () => {
  return [{ title: 'Axon Ivy Neo' }, { name: 'description', content: 'Welcome to Axon Ivy Neo!' }];
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Neo</h1>
      <Button icon={IvyIcons.Process} size='large' onClick={() => navigate('processes')} />
    </div>
  );
}
