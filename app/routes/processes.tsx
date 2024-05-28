import type { MetaFunction } from '@remix-run/node';
import { useEffect, useState } from 'react';
import { Process } from '~/process';

export const meta: MetaFunction = () => {
  return [{ title: 'Processes' }, { name: 'description', content: 'Welcome to Remix (SPA Mode)!' }];
};

export default function Index() {
  const [processes, setProcesses] = useState<Array<Process>>([]);
  useEffect(() => {
    fetch('http://localhost:3000/processes').then(async res => {
      const result = await res.json();
      console.log(result);
      setProcesses(result);
    });
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Processes</h1>
      <ul>
        {processes.map(process => (
          <li key={process.name}>{process.name}</li>
        ))}
      </ul>
    </div>
  );
}
