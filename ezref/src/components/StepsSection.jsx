import React from 'react';
import StepCard from './StepCard';
import { RiSendPlaneFill } from 'react-icons/ri';
import { MdOutlineHowToReg, MdManageSearch } from 'react-icons/md';
import { FiShare } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineDocumentText } from 'react-icons/hi';


const StepsSection = ({ role }) => {
  const isEmployee = role === 'employee';

  const steps = isEmployee
    ? [
        {
          icon: RiSendPlaneFill,
          text: "After creating and verifying your account, send your profile's QR code to a former supervisor, community leader or mentor who is willing to give you a reference.",
          iconOnLeft: true,
        },
        {
          icon: MdOutlineHowToReg,
          text: "This person will create an account and complete a quick verification process before answering a few questions about you.",
          iconOnLeft: false,
        },
        {
          icon: FiShare,
          text: "When a prospective employer asks for your references, provide them the link to your account.",
          iconOnLeft: true,
        },
      ]
    : [
        {
          icon: AiOutlineUserAdd,
          text: "Direct applicants to create an EZRef account and follow the steps to allow their references to submit information to their profile.",
          iconOnLeft: true,
        },
        {
          icon: MdManageSearch,
          text: "Find your applicant's account, or have them send you the link or QR code.",
          iconOnLeft: false,
        },
        {
          icon: HiOutlineDocumentText,
          text: "Read the statements made by the applicant's references, who have already had their identities verified by EZRef.",
          iconOnLeft: true,
        },
      ];

  return (
    <>
      <div style={{ marginTop: '5rem' }}>
        <h2 style={{ textAlign: 'center' }}>
          {isEmployee
            ? 'Submit references for your job application in'
            : "Get information from your applicant's references in"}
        </h2>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>3 EASY STEPS</h2>
      </div>
      {steps.map((step, index) => (
        <StepCard key={index} Icon={step.icon} text={step.text} iconOnLeft={step.iconOnLeft} />
      ))}
    </>
  );
};

export default StepsSection;