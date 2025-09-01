
import Dock from './Dock.jsx'


const items = [
  { icon: "https://img.icons8.com/?size=100&id=12229&format=png&color=000000", label: 'Home', onClick: () => window.location.href = '#home' },
  { icon: "https://img.icons8.com/?size=100&id=108789&format=png&color=000000", label: 'Achievement', onClick: () => window.location.href = '#achievements' },
  { icon: "https://img.icons8.com/?size=100&id=IerOpHeUt2OH&format=png&color=000000", label: 'About', onClick: () => window.location.href = '#about' },
  { icon: "https://img.icons8.com/?size=100&id=6BBCqlzE4iKd&format=png&color=000000", label: 'Contact', onClick: () => window.location.href = '#contact' },
  { icon: "https://img.icons8.com/?size=100&id=hV1Oj7Mpr8om&format=png&color=000000", label: 'Education', onClick: () => window.location.href="#education" },
  { icon: "https://img.icons8.com/?size=100&id=MLsI9Dal53Hu&format=png&color=000000", label: 'Projects', onClick: () => window.location.href="#projects" },
];

function NavBar() {
  return (
    <div className="flex justify-center w-full  ">
      <Dock items={items} />
    </div>
  );
}
export default NavBar;
