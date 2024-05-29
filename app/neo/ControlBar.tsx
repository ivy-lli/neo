import { Button, Flex, IvyIcon } from '@axonivy/ui-components';
import { IvyIcons } from '@axonivy/ui-icons';

export const ControlBar = () => {
  return (
    <Flex style={{ height: '40px', borderBottom: 'var(--basic-border)', background: 'var(--N50)' }}>
      <Flex alignItems='center' gap={4} style={{ paddingInline: 'var(--size-4)' }}>
        <Button icon={IvyIcons.Home} size='large' />
        <Button icon={IvyIcons.Market} size='large' />
      </Flex>
      <Flex alignItems='center'>
        <Flex
          alignItems='center'
          gap={1}
          style={{ paddingInline: 'var(--size-4)', height: '100%', border: 'var(--basic-border)', background: 'var(--background)' }}
        >
          <IvyIcon style={{ fontSize: '16px' }} icon={IvyIcons.Process} />
          ProductOrderRequest
          <Button icon={IvyIcons.Close} />
        </Flex>
        <Flex alignItems='center' gap={1} style={{ paddingInline: 'var(--size-4)', height: '100%', border: 'var(--basic-border)' }}>
          <IvyIcon style={{ fontSize: '16px' }} icon={IvyIcons.Database} />
          Data
        </Flex>
      </Flex>
    </Flex>
  );
};
