import React from 'react';
import { FaFlag } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.css';
import { TimeLineContainer, TimeLineTitle } from './TimeLineElements';

const TimeLine = ({ id, timeLineItems }) => {
    return (
        <>̵
            <TimeLineContainer id={id}>
                <TimeLineTitle>
                    Experience
                </TimeLineTitle>
                <VerticalTimeline>
                    {
                        timeLineItems.map(timeLineItem => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={timeLineItem.contentStyle}
                                contentArrowStyle={timeLineItem.arrowStyle}
                                date={timeLineItem.date}
                                dateClassName="dateInTimeLine"
                                iconStyle={timeLineItem.iconStyle}
                                icon={timeLineItem.icon}
                            >
                                <h3 className="vertical-timeline-element-title">{timeLineItem.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{timeLineItem.subtitle}</h4>
                                <p>{timeLineItem.paragraph}</p>
                            </VerticalTimelineElement>
                        ))
                    }
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaFlag />}
                    />
                </VerticalTimeline>
            </TimeLineContainer>
        </>
    )
}

export default TimeLine
