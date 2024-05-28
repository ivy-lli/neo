import type { MetaFunction } from '@remix-run/node';
import { useQuery } from '@tanstack/react-query';
import { Process } from '~/process';

export const meta: MetaFunction = () => {
  return [{ title: 'Processes' }, { name: 'description', content: 'Welcome to Remix (SPA Mode)!' }];
};

export default function Index() {
  const { data } = useQuery({
    queryKey: ['processes'],
    queryFn: () => fetch('http://localhost:3000/processes').then(res => res.json() as Promise<Array<Process>>),
    initialData: []
  });

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Processes</h1>
      <ul>
        {data.map(process => (
          <li key={process.name}>{process.name}</li>
        ))}
      </ul>
    </div>
  );
}
