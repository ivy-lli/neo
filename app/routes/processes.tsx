import { Flex, IvyIcon, SearchInput } from '@axonivy/ui-components';
import { IvyIcons } from '@axonivy/ui-icons';
import type { MetaFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import { useProcesses } from '~/data/processes';

export const meta: MetaFunction = () => {
  return [{ title: 'Axon Ivy Processes' }, { name: 'description', content: 'Axon Ivy Processes Overview' }];
};

const ProcessCard = ({ name, path }: { name: string; path: string }) => {
  const navigate = useNavigate();
  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      gap={2}
      style={{ background: 'var(--N75)', padding: 'var(--size-2)', borderRadius: 10, height: 150, flex: '0 1 200px' }}
      onClick={() => navigate(`/process?path=${path}`)}
    >
      <div style={{ background: 'var(--background)', borderRadius: 8, flex: '1 0 auto' }}>
        <img src='/process.svg' alt='process-prev'></img>
      </div>
      <Flex alignItems='center' justifyContent='space-between'>
        <span>{name}</span>
        <IvyIcon icon={IvyIcons.ArrowRight} />
      </Flex>
    </Flex>
  );
};

export default function Index() {
  const processes = useProcesses();
  return (
    <Flex direction='column' gap={4} style={{ padding: '30px' }}>
      <span style={{ fontWeight: 600, fontSize: 16 }}>Processes</span>
      <SearchInput />
      <Flex gap={4} style={{ flexWrap: 'wrap' }}>
        {processes.map(process => (
          <ProcessCard key={process.name} name={process.name} path={process.path} />
        ))}
      </Flex>
    </Flex>
  );
}
