import Menu from '../Menu/menu';
import ClickableCircle from '../ClickbleCircle/clickableCircle';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { useInView } from 'react-intersection-observer';

function HomePage() {
  const { ref, inView } = useInView({ threshold: 0.9 });

  const scrollToTop = () => {
    console.log("pq não funciona?????");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <Menu />
      <motion.div
        variants={textVariant(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mt-14 relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl text-slate-300 font-bold mb-[-10px]">Trajetória do atleta</h1>
      </motion.div>

      <motion.div
        variants={slideIn('left', 'tween', 0.4, 1)}
        initial="hidden"
        animate={inView ? "hidden" : "show"}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
        ref={ref}
      >
        <div className="flex justify-center mt-12 sm:space-x-16 md:space-x-20 xl:md:space-x-28 2xl:md:space-x-40 mb-8 ">
          <ClickableCircle text="Próximo evento" link="/next-event" image="../../img/calendar.jpg" />
          <ClickableCircle text="Sua foto" link="/your-photo" image="../../img/SuaFoto.jpeg" />
          <ClickableCircle text="Melhore seu tempo" link="/improve-time" image="../../img/SuaFoto.jpeg" />
          <ClickableCircle text="Nutrição" link="/nutrition" image="../../img/SuaFoto.jpeg" />
          <ClickableCircle text="Corridas recentes" link="/recent-races" image="../../img/SuaFoto.jpeg" />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        animate={inView ? "hidden" : "show"}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
        ref={ref}
      >
        <div className="flex items-center justify-center">
          <div className="w-96 md:h-80 lg:h-96 xl:h-[400px] 2xl:h-[600px] md:w-3/5 lg:w-3/5 relative overflow-hidden rounded-b-3xl">
            <div
              className="rounded-tl-[140px] absolute inset-x-0 h-6 bg-gradient-to-r from-blue-950 to-blue-200 h-[300px] z-[-1] rounded-tr-3xl "
            >
            </div>
            <img
              src="../../img/bg-stadium.jpg"
              alt="Pista de corrida no estádio"
              className="object-cover pt-4 w-full h-full rounded-tl-[140px] rounded-tr-3xl rounded-b-3xl"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="absolute top-52 md:top-64 lg:top-80 xl:top-80 2xl:top-[525px] right-0 sm:right-44 md:right-52 xl:right-64  2xl:right-96 3xl:right- transform -translate-x-1/2">
          <div className="w-24 sm:w-32 2xl:w-40 h-24 sm:h-32 2xl:h-40  bg-gradient-to-r from-blue-950 to-blue-200 rounded-full opacity-80 flex flex-col items-center justify-center">
            <p className="text-balance text-center mt-6">Run with us</p>
            <p className="text-balance text-center">↓</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={textVariant(0.3, 2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-center mt-24 relative z-10 mb-96"
        ref={ref}
      >
        <p className="mx-auto max-w-[1000px] text-lg lg:text-2xl xl:text-4xl text-center text-slate-200 ">
          Seja bem-vindo ao nosso site dedicado aos entusiastas de{' '}
          <a href="/next-race" className="text-slate-600">corrida</a> e{' '}
          <a href="/next-race" className="text-slate-600">atletismo</a>! Aqui você encontrará informações úteis sobre{' '}
          <a href="/all-events" className="text-slate-600">eventos</a>,{' '}
          <a href="/run-faster-ebook" className="text-slate-600">dicas de treinamento</a>,{' '}
          <a href="/healthy-recipes-ebook" className="text-slate-600">receitas saudáveis</a>, e muito mais para ajudar a melhorar sua performance e promover um estilo de vida ativo e saudável. Explore nossos conteúdos e descubra como dar o próximo passo na sua trajetória como atleta.
        </p>

        <button onClick={scrollToTop} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Voltar ao Topo</button>
      </motion.div>

    </div >
  );
}
export default HomePage;
