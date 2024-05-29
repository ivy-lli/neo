import { Button, Flex } from '@axonivy/ui-components';
import { IvyIcons } from '@axonivy/ui-icons';
import { useNavigate } from '@remix-run/react';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Flex
      direction='column'
      alignItems='center'
      gap={4}
      style={{ paddingBlock: 'var(--size-4)', borderInlineEnd: 'var(--basic-border)', flex: '0 0 50px' }}
    >
      <Button icon={IvyIcons.Process} size='large' toggle={true} onClick={() => navigate('processes')} />
      <Button icon={IvyIcons.Database} size='large' onClick={() => navigate('processes')} />
      <Button icon={IvyIcons.File} size='large' onClick={() => navigate('processes')} />
      <Button icon={IvyIcons.Tool} size='large' onClick={() => navigate('processes')} />
    </Flex>
  );
};
