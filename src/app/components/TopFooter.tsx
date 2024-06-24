export default  function TopFooter() {
    return (
        <div className="    bg-[#111111]  text-white w-full h-96" >

                <div className=" flex   justify-between ml-24 ">
                    <div className=" gap-2 " >
                    <h1 className=" font-bold  size-32  text-4xl w-auto pt-20 pl-10 space">Venha fazer parte do  <br/> nosso time. </h1> <br/>
                    <h4 className=" mt-10  ml-10 opacity-40 "  >informe o seu e-mail para receber noticias de futuras vagas. </h4>
                    </div>
                   
                    <div >
                        <h4 className=" mt-36   h-12 mr-20 w-80 size-4 font-semibold text-white rounded-sm justify-end  text-3xl" >Conheça <br/>  nossas vagas</h4>
                    </div>
                </div>

                <div className=" flex   justify-between ">
                    <div className=" flex gap-2 ml-24 " >
                        <input type="email" name="" id="" className=" mt-10 ml-10 w-72 h-12 bg-zinc-800 text-white rounded-sm p-2  text-sm " placeholder="Entre com o seu endereço de e-mail"/>
                         <button className=" mt-10  h-12  w-36 size-4 font-semibold  bg-[#AD6600] text-black rounded-sm  text-sm " >Enviar</button>
                    </div>
                   
                    <div >
                        <button className=" mt-8  mr-64  h-10  w-36 size-4 font-semibold  bg-[#AD6600] text-black rounded-sm  text-sm border  border-red-900" >Conhecer</button>
                    </div>
                </div>
            
        </div>
    );
}