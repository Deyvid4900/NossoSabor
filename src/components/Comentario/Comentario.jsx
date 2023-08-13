import React from 'react';

import '../Comentario/styles.css';


const Comentario = () => {



    return (
        <>
            <div className='bg-primary container-fluid  divComentario p-2 '>
                <div className=''>
                    <div className='d-flex gap-2'>
                        <div>icone</div>
                        <div>nome</div>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste nihil animi deleniti sint rerum reprehenderit. Explicabo corrupti quam enim porro ut iure sed itaque ducimus accusantium. Doloremque, alias dignissimos.
                    </div>
                    <div className='divBtnLike d-flex align-items-center gap-2'>
                        <div>10</div>
                        <button>icone</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comentario