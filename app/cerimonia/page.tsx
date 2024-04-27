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
      <div className="flex flex-wrap w-full justify-between items-center align-middle mx-auto">
        <div>
          <p>A cerimônia ocorrerá no restaurante e trattoria Nonno Vitório</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14728.798250801932!2d-47.1969776!3d-22.6463469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c893445fbaac77%3A0x72c05435323f738c!2sNonno%20Vit%C3%B3rio%20Trattoria%20%7C%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1714225543958!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
