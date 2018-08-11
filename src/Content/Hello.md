import Highlight from 'react-highlight'
import Button from '../components/Button'
import CodeExample from '../CodeExample'

# Markdown
Hello World!

<CodeExample
  title="Button"
  component={() => <Button onClick={() => console.log('yo')}>Click me!</Button>}
  language="javascript"
  source={`<Button onClick={() => console.log('yo')}>Click me!</Button>`}
/>
