import { tsParticles } from "tsparticles-engine";
import particlesConfig from "./Particles-config";
function ParticlesBackground () {
    return (
        <tsParticles params = {particlesConfig}>
        </tsParticles>
    )
    
}
export default ParticlesBackground;