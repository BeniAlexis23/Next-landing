interface ContainerPageProps {
    children: React.ReactNode;
    className?: string; // Agregar className
}

const ContainerPage = ({ children, className }: ContainerPageProps) => {
    return (
        <div className={`w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6 ${className || ""}`}>
            {children}
        </div>
    );
}

export default ContainerPage;
