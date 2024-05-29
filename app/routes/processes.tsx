import { Flex, SearchInput } from '@axonivy/ui-components';
import type { MetaFunction } from '@remix-run/node';
import { useProcesses } from '~/data/processes';

export const meta: MetaFunction = () => {
  return [{ title: 'Axon Ivy Processes' }, { name: 'description', content: 'Axon Ivy Processes Overview' }];
};

export default function Index() {
  const processes = useProcesses();
  return (
    <Flex direction='column' gap={4}>
      <span style={{ fontWeight: 600, fontSize: 16 }}>Processes</span>
      <SearchInput />
      <ul>
        {processes.map(process => (
          <li key={process.name}>{process.name}</li>
        ))}
      </ul>
    </Flex>
  );
}
