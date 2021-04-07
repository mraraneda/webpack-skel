import "../css/comp.css";

export const sayHi = (name) => {
    console.log("Creando etiqueta H1");

    const h1 = document.createElement("h1");
    h1.innerText = `Hi, ${name}`;

    document.body.append(h1);
};
