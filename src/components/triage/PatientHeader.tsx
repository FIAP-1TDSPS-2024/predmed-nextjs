interface PatientHeaderProps {
  patientName: string;
}

const PatientHeader = ({ patientName }: PatientHeaderProps) => {
  return <h1 className="text-2xl font-bold mb-4 text-black">{patientName}</h1>;
};

export default PatientHeader;
