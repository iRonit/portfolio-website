import React, { useCallback, useEffect, useRef } from 'react';
import { Card, CardContainer, CardRow, CloseModalButton, ModalContent } from './ModalItems';
import SkillBars from './SkillBars';

const Modal = ({ showModal, setShowModal, skillItem }) => {

    // Clicking outside the modal
    const modalRef = useRef();
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
            document.body.style.overflow = "auto";
        }
    };

    // Pressing on Escape key
    const keyPress = useCallback(e => {
        if (e.key === 'Escape') {
            setShowModal(false);
            document.body.style.overflow = "auto";
        }
    }, [setShowModal, showModal]);
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            {
                showModal &&
                <CardContainer ref={modalRef} onClick={closeModal}>
                    <Card bgColor={skillItem.bgColor}>
                        <CloseModalButton
                            onClick={() => { setShowModal(false); document.body.style.overflow = "auto"; }}
                        />
                        <CardRow>
                            {/* Column1 */}
                            <ModalContent gridArea={'col1'}>
                                {
                                    skillItem.col1.map((col1SkillSet) => {
                                        return <SkillBars skillTitle={col1SkillSet.title} skills={col1SkillSet.skills} bgColor={skillItem.bgColor}></SkillBars>
                                    })
                                }
                            </ModalContent>

                            {/* Column2 */}
                            <ModalContent gridArea={'col2'}>
                                {
                                    skillItem.col2.map((col2SkillSet) => {
                                        return <SkillBars skillTitle={col2SkillSet.title} skills={col2SkillSet.skills} bgColor={skillItem.bgColor}></SkillBars>
                                    })
                                }
                            </ModalContent>

                            {/* Column3 */}
                            <ModalContent gridArea={'col3'}>
                                {
                                    skillItem.col3.map((col3SkillSet) => {
                                        return <SkillBars skillTitle={col3SkillSet.title} skills={col3SkillSet.skills} bgColor={skillItem.bgColor}></SkillBars>
                                    })
                                }
                            </ModalContent>
                        </CardRow>
                    </Card>
                </CardContainer>
            }
        </>
    )
}

export default Modal;
