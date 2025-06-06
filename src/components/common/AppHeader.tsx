interface AppHeaderProps {
  title: string;
}

const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <h1 className="text-3xl font-bold text-center">{title}</h1>
    </header>
  );
};

export default AppHeader;
