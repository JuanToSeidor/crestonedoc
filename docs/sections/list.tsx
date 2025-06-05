import {FeatureItem, Feature} from '../cards/cards';

const FeatureList: FeatureItem[] = [
  {
    title: 'connections',
    img: 'Conections',
    description: (
      <>
        Configure where you want to send the data extracted from SAP.
      </>
    ),
    link: '/docs/sections/Connections',
  },
  {
    title: 'Create a Node',
    img: 'Node',
    description: (
      <>
        Define what data to extract and how to process it before sending it.
      </>
    ),
    link: '/docs/sections/node',
  },
  {
    title: 'Create a Job',
    img: 'Job',
    description: (
      <>
        Orchestrate the execution of multiple nodes and destinations with customized rules.
      </>
    ),
    link: '/docs/sections/Jobs',
  },
  {
    title: 'Workspaces',
    img: 'WorkSpace',
    description: (
      <>Organize your connections, nodes and jobs in collaborative environments. </>
    ),
    link: '/docs/sections/Settings',
  },
  {
    title: 'Monitor',   
    img: 'Monidor',
    description: (
      <>
        Monitor the status and results of each run in real time.
      </>
    ),
    link: '/docs/sections/Monitor',
  },
  
];



export default function ListSection(){
    return(
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
    )
}