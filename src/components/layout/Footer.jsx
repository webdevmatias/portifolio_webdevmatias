function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center w-full h-auto py-4 bg-[#01161E] text-white">
      <div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Lucas Matias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
