import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            {/* Contenedor principal con ajuste para responsive */}
            <div className="flex items-center justify-center min-h-screen px-4 md:px-0">
                <div className="grid max-w-5xl gap-6 mx-auto w-full md:grid-cols-2 md:px-20 md:items-center">
                    <div className="max-w-[450px] text-center md:text-left md:mt-0 mt-20">
                        <h1 className="text-2xl leading-tight md:text-4xl md:mb-5">
                            Mis <span className="font-bold text-secondary">servicios</span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300">
                            Ofrezco servicios de desarrollo web frontend especializado en la creación de sitios web y aplicaciones atractivas y funcionales.
                            Utilizando tecnologías actuales como React, Vue, Next, MongoDB, etc.
                        </p>
                        <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                            Contacta conmigo
                        </button>
                    </div>
                    {/* Contenedor del Slider que mantiene su tamaño y posición en todas las pantallas */}
                    <div className="flex justify-center md:justify-center w-full">
                        <div className="w-full max-w-[400px]">
                            <SliderServices />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
