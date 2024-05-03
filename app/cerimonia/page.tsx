import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Cerimonia() {
  return (
    <div className="w-[90%] m-auto p-8">
      <div className="h-[40px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/presentes">Cerimônia</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="">
        <div>
          <p>A cerimônia ocorrerá no restaurante e trattoria Nonno Vitório</p>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.1995632517715!2d-47.199552523746156!3d-22.646346879439193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c893445fbaac77%3A0x72c05435323f738c!2sNonno%20Vit%C3%B3rio%20Trattoria%20%7C%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1714752564236!5m2!1spt-BR!2sbr"
            style={{ border: 0, width: "600px", height: "450px" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
