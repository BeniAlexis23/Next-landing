import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () => {
    return (
        <MotionTransition 
            position="bottom" 
            className="hidden md:flex md:w-2/5 md:self-start"
        >
            <Image 
                src="/avatar-1.png" 
                width={400} 
                height={400} 
                className="w-60 h-60 md:w-full md:h-auto" 
                alt="Avatar" 
            />
        </MotionTransition>
    );
}

export default Avatar;