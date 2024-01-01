import React from 'react';

function TodoItem({ params }: { params: { id: string } }) {

    console.log(params.id);

    return (
        <div>TodoItem</div>
    )
}

export default TodoItem