import { Flex, IvyIcon, SearchInput } from '@axonivy/ui-components';
import { IvyIcons } from '@axonivy/ui-icons';
import type { MetaFunction } from '@remix-run/node';
import { useProcesses } from '~/data/processes';

export const meta: MetaFunction = () => {
  return [{ title: 'Axon Ivy Processes' }, { name: 'description', content: 'Axon Ivy Processes Overview' }];
};

const ProcessCard = ({ name }: { name: string }) => {
  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      gap={2}
      style={{ background: 'var(--N75)', padding: 'var(--size-2)', borderRadius: 10, height: 150, flex: '0 1 200px' }}
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
    <Flex direction='column' gap={4}>
      <span style={{ fontWeight: 600, fontSize: 16 }}>Processes</span>
      <SearchInput />
      <Flex gap={4} style={{ flexWrap: 'wrap' }}>
        {processes.map(process => (
          <ProcessCard key={process.name} name={process.name} />
        ))}
      </Flex>
    </Flex>
  );
}
