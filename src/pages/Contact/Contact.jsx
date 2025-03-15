import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import iWhats from "../../assets/img/icon-whats.webp";
import iIsta from "../../assets/img/icon-insta.webp";
import iLinke from "../../assets/img/icon-linke.webp";
import gitHub from "../../assets/img/github.webp";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccessToast = () => {
  toast.success(
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span>Mensagem enviada com sucesso!</span>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        backgroundColor: "#e6f7e5",
        color: "#4BB543",
        fontWeight: "bold",
      },
    }
  );
};

const showErrorToast = () => {
  toast.error(
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span>Erro ao enviar a mensagem. Tente novamente!</span>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        backgroundColor: "#fdecea",
        color: "#FF4C4C",
        fontWeight: "bold",
      },
    }
  );
};

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  const validateForm = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    if (!name) {
      errors.name = "O nome é obrigatório.";
      isValid = false;
    } else if (name.length < 4) {
      errors.name = "O nome deve ter no minimo 4 caracteres";
      isValid = false;
    }

    if (!email) {
      errors.email = "O email é obrigatório.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email inválido.";
      isValid = false;
    }

    if (!message) {
      errors.message = "Mensagem obrigatória.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleInputChange = (campo, value) => {
    if (campo === "name") {
      setName(value);
      setErrors((prev) => ({ ...prev, name: "" }));
    } else if (campo === "email") {
      setEmail(value);
      setErrors((prev) => ({ ...prev, email: "" }));
    } else if (campo === "message") {
      setMessage(value);
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      const formData = {
        name: name,
        email: email,
        message: message,
      };
      fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Resposta do servidor:", data);
          setIsLoading(false);
          showSuccessToast();
        })
        .catch((error) => {
          console.error("Erro ao enviar o formulário:", error);
          setIsLoading(false);
          showErrorToast();
        });

      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="h-screen">
      <ToastContainer />

      <div className="flex justify-center items-center">
        <div className="z-10 mt-64 ">
          <div className="md:mb-10 2xl:mt-56 reveal">
            <h1 className="text-white -mt-36 mb-10 flex justify-center items-center font-bold text-5xl font-mono select-none sm:hidden lg:flex ">
              Contato
            </h1>
            <div className="border-slate-950 bg-slate-950 rounded-xl text-white justify-center items-center sm:p-16 md:p-24 lg:p-32 sm:-mt-36">
              <form action="" onSubmit={handleSubmit}>
                <div className="lg:w-96 sm:w-52 sm:h-64 flex items-center justify-center flex-col">
                  <Label
                    htmlFor="Name"
                    className="lg:mr-80 lg:-ml-3 lg:mb-1 sm:mr-36 sm:-ml-4 sm:mb-1"
                  >
                    Name*
                  </Label>
                  <Input
                    className="bg-white text-black"
                    type="name"
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    value={name}
                  />
                  {errors.name && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                      }}
                    >
                      {errors.name}
                    </p>
                  )}
                  <Label
                    htmlFor="E-mail"
                    className="lg:mr-72 lg:-ml-10 lg:mb-1 lg:mt-2 sm:mr-36 sm:-ml-3 sm:mb-1 sm:mt-2"
                  >
                    E-mail*
                  </Label>
                  <Input
                    className="bg-white text-black"
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                  <Label
                    htmlFor="Message"
                    className="lg:mr-72 lg:-ml-6 lg:mb-1 lg:mt-2 sm:mr-24 sm:-ml-11 sm:mb-1 sm:mt-2"
                  >
                    Message*
                  </Label>
                  <Textarea
                    className="bg-white text-black h-24"
                    value={message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                  />
                  {errors.message && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {errors.message}
                    </p>
                  )}
                  <Button
                    variant="gradient"
                    type="submit"
                    disabled={isLoading}
                    className="mt-12 w-48 h-10  hover:scale-110 hover:transition-all hover:duration-500 shadow-lg  shadow-blue-500"
                  >
                    {isLoading ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      "Enviar"
                    )}
                  </Button>
                </div>
              </form>
            </div>
            <footer className="flex items-center justify-center gap-8 mt-16 sm:mt-10 lg-mb-8">
              <a href={`https://wa.me/${whatsappNumber}`}>
                <img
                  src={iWhats}
                  alt="whatssap"
                  className="hover:bg-green-500 transition-all size-12 rounded-md hover:scale-110 hover:transition-all hover:duration-500 "
                />
              </a>

              <a href="https://www.instagram.com/alphacode_programacao/">
                <img
                  src={iIsta}
                  alt="instagram"
                  className="hover:bg-pink-600 transition-all size-12 rounded-md hover:scale-110 hover:transition-all hover:duration-500"
                />
              </a>

              <a href="https://www.linkedin.com/in/mizael-costa-santos/">
                <img
                  src={iLinke}
                  alt="linkedin"
                  className="hover:bg-blue-500 transition-all size-12 rounded-md hover:scale-110 hover:transition-all hover:duration-500"
                />
              </a>

              <a href="https://github.com/mizaeldragon">
                <img
                  src={gitHub}
                  alt="linkedin"
                  className="hover:bg-zinc-600 transition-all size-12 rounded-md hover:scale-110 hover:transition-all hover:duration-500"
                />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
