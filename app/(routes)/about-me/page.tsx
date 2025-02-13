import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage className="flex flex-col items-center">
                <h1 className="text-2xl leading-tight text-center md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>
                <CounterServices />

                {/* Contenedor para Avatar y TimeLine */}
                <div className="flex flex-col items-center w-full md:flex-row md:items-start md:justify-center md:gap-x-10">
                    <Avatar />
                    <TimeLine className="w-full md:w-3/5" />
                </div>
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;