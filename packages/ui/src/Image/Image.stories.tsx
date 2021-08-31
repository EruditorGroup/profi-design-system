import React from 'react';
import {Story, Meta} from '@storybook/react';
import Image, {ImageProps} from './index';
import Title from '../Typography/Title';

import src from './image.jpg';

export default {
  title: 'Image',
  component: Image,
} as Meta;

const blockStyles = {marginBottom: '32px'};
const titlePrimaryStyles = {marginBottom: '24px'};
const titleSecondaryStyles = {marginBottom: '16px'};

const Template: Story<ImageProps> = (args) => {
  return (
    <div>
      <Title level={1} style={titlePrimaryStyles}>
        Изображение
      </Title>

      <div style={blockStyles}>
        <Title level={2} size="xl" style={titleSecondaryStyles}>
          Стандартное
        </Title>
        <Image {...args} src={src} />
      </div>

      <div style={blockStyles}>
        <Title level={2} size="xl" style={titleSecondaryStyles}>
          С закруглением
        </Title>
        <Image {...args} src={src} radius="m" />
      </div>

      <div style={blockStyles}>
        <Title level={2} size="xl" style={titleSecondaryStyles}>
          Lazy
        </Title>
        <Image {...args} src={src} radius="m" lazy />
      </div>

      <div style={blockStyles}>
        <Title level={2} size="xl" style={titleSecondaryStyles}>
          Fallback
        </Title>
        <Image
          {...args}
          src="error"
          radius="m"
          // fit="cover"
          // fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAEsCAMAAAC/spp+AAAA0lBMVEXIy9L////+/v7t7vHO0dfs7fDQ09nt7vDf4eXv8PLJzNP7+/zk5en29vf09fb9/f3Z2+D4+PnJzNLh4+fKzdPc3uL7/PzW2d739/jr7O7LzdTq6+7KzdTa3OHY2t/c3eL8/P3U1tze4OT19ff6+/vZ29/X2d7n6OvP0tjV193p6+3Mz9Xy8vTp6u39/f7x8fPw8fPMztX3+Pnb3eL6+vru7/HNz9bP0dfq7O7j5Ojz8/Xd3+PV19zl5urR1Nn5+frW2N709Pb8/Pzb3eHl5+re3+T6wXOtAAADdklEQVR4XuzAMQEAAADCIPunNsU+WAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj79rXjNhJFUfSeIkUxiApW6uBOznGcw+T8/780FmSJ3VLJgNEkMGTt9QH1tIHzUjdOs7LQLRVllsbWLUgi1SZKrEMwcKqRG1hXYBapZtHMugGRahdZJ2CgBnRiWZA4NcAl1l2MCsOCWA2Jre2QqiGptR0ybQ2XJ3YrJ8uhtjJrO5RVG7ndWl7VUVrbodDG0mqw1EZhbQdtnVgNTrRl3UEc/4P3QBwgjs4ijvzpfJqOY+LYRRzJ8UIrGt4jjuuII3/stHV0RRxbxPHmha4bXRDHV8SRv9BN7pw41ojjsXYtYuIgjkO/f46JY4U4jrXPPSEO4jDLF/KYEgdxmD2VzyviIA6zuXwmxEEcZlP5jIiDOMxS+TwgDuIwG8vnPnEQx6FbhVPiII4vhvJ4SBxfEMc97ZvkxEEcK0faM7cV4iCOq9F3Hb4++jx5e5qEEQdx2IXTDcO7dlD+TCuX4zDiIA47X6ii6Btt3PmgNTcOIw7isPjY6avJ3A67E2njh3EocXCa8GT6ajJ6cP/0Yf6tNvrStTqIo8LdSl/XuTFxEIe/DcmdEccacfS0y/1NHMThb0Nyc+IgDn8bkhNxEEdPfsRBHD35EQdx9EQcxPF9bRAHcfQUehzE8S5bvH/50ddG6HEQR18rk0+eNgKPgzheau3ouaeNoOMgjh+18dPM00bAcRDHz6pkO1sTdhzEce78Ryt9hR4Hcfwy0g2/Vm0EHgdx/FZoR1r9+wo6DuKIf9cud1a1EXAcxPH8SPtGf1RtBBsHcdz9Uz5/vVbocRBHfjCC4OMgjr78iIM4nsmPOIjjH/kRB3FM5UccxPGv/IiDOM4ccfgRx6OR/IiDOC51A3FAFeIAcYA4QBwgDhAHiKMNUKghhbUdSjWktLZDpoZk1nZI1ZDU2g6xGhJb6yFSIyJrPyRODXCJdQAGasDAuo1hYVQwq72OaGZdgYFTjVynNgVJpNpEiXUL4jQrC91SUWZp/F87cEADAACAMMj+qe3xwToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCDXSmxdiXFSAAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: 300,
  height: 240,
};
