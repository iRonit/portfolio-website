import InfosysLogo from '../assets/svgIcons/InfosysLogo';
import ExtremeLogo from '../assets/svgIcons/ExtremeLogo';
import NCRLogo from '../assets/svgIcons/NCRLogo';
import {SiCisco as CiscoLogo} from 'react-icons/si';
import {FaGraduationCap} from 'react-icons/fa';

export const timeLineItems = [
    {
        title: "Software Engineer II",
        subtitle: "NCR, Dundee, United Kingdom",
        paragraph: "",
        date: "Feb, 2022 - Present",
        dateClass: "dateInTimeLineW",
        icon: <NCRLogo />,
        iconStyle: { background: '#54bc4c', color: '#fff' },
        contentStyle: { boxShadow: 'none', background: 'rgb(84,188,76)', color: '#fff', borderRadius: '20px' },
        arrowStyle: { borderRight: '7px solid  rgb(84,188,76)' }
    },
    {
        title: "Software Engineer II",
        subtitle: "Cisco, Bangalore, India",
        paragraph: "",
        date: "Mar, 2020 - Jan, 2022",
        dateClass: "dateInTimeLineW",
        icon: <CiscoLogo />,
        iconStyle: { background: '#049fd9', color: '#fff' },
        contentStyle: { boxShadow: 'none', background: 'rgb(33, 150, 243)', color: '#fff', borderRadius: '20px' },
        arrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
    },
    {
        title: "Associate Software Application Engineer",
        subtitle: "Extreme Network, Bangalore, India",
        paragraph: "",
        date: "Nov, 2018 - Mar, 2020",
        dateClass: "dateInTimeLineW",
        icon: <ExtremeLogo />,
        iconStyle: { background: '#fff', color: 'rgb(114 57 222)' },
        contentStyle: { boxShadow: 'none', background: 'rgb(114 57 222)', color: '#fff', borderRadius: '20px' },
        arrowStyle: { borderRight: '7px solid  rgb(114 57 222)' }
    },
    {
        title: "Senior System Engineer",
        subtitle: "Infosys, Bangalore, India",
        paragraph: "",
        date: "Jul, 2018 - Nov, 2018",
        dateClass: "dateInTimeLineB",
        icon: <InfosysLogo />,
        iconStyle: { background: '#fff', color: "#3781c2" },
        contentStyle: { boxShadow: 'none', background: '#fff', color: '#000', borderRadius: '20px' },
        arrowStyle: { borderRight: '7px solid  #fff' }
    },
    {
        title: "System Engineer",
        subtitle: "Infosys, Bangalore, India",
        paragraph: "",
        date: "Jul, 2016 - Jul, 2018",
        dateClass: "dateInTimeLineB",
        icon: <InfosysLogo />,
        iconStyle: { background: '#fff', color: '#3781c2' },
        contentStyle: { boxShadow: 'none', background: '#fff', color: '#000', borderRadius: '20px' },
        arrowStyle: { borderRight: '7px solid  #fff' }
    },
    {
        title: "Bachelor of Technology",
        subtitle: "Hindustan University, Chennai, India",
        paragraph: "",
        date: "Aug, 2012 - Mar, 2016",
        dateClass: "dateInTimeLineW",
        icon: <FaGraduationCap />,
        iconStyle: { background: '#fff', color: '#3781c2' },
        contentStyle: { boxShadow: 'none', background: "#ff7f50", color: '#fff', borderRadius: '20px' },
        arrowStyle: { borderRight: '7px solid  #ff7f50' }
    }
];
