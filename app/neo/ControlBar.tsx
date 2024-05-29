import { Button, Flex, IvyIcon } from '@axonivy/ui-components';
import { IvyIcons } from '@axonivy/ui-icons';

const EditorTab = ({ icon, name, active }: { icon: IvyIcons; name: string; active?: boolean }) => (
  <Flex
    alignItems='center'
    gap={1}
    style={{
      paddingInline: 'var(--size-4)',
      height: '100%',
      borderInlineEnd: 'var(--basic-border)',
      background: active ? 'var(--background)' : undefined
    }}
  >
    <IvyIcon style={{ fontSize: '16px' }} icon={icon} />
    {name}
    {active && <Button icon={IvyIcons.Close} />}
  </Flex>
);

export const ControlBar = () => {
  const openEditors = [
    { icon: IvyIcons.Process, name: 'ProductOrderRequest', active: true },
    { icon: IvyIcons.Database, name: 'Data' }
  ];
  return (
    <Flex style={{ height: '40px', borderBottom: 'var(--basic-border)', background: 'var(--N50)' }}>
      <Flex alignItems='center' gap={4} style={{ paddingInline: 'var(--size-4)', borderInlineEnd: 'var(--basic-border)' }}>
        <Button icon={IvyIcons.Home} size='large' />
        <Button icon={IvyIcons.Market} size='large' />
      </Flex>
      <Flex alignItems='center'>
        {openEditors.map(editor => (
          <EditorTab key={editor.name} {...editor} />
        ))}
      </Flex>
    </Flex>
  );
};
