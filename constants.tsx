import { Category, Product, Catalog, Testimonial, SiteSettings, GalleryImage } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  whatsapp: '916382488657',
  email: 'hitechupvc@gmail.com',
  facebook: 'https://www.facebook.com/share/1GeNASNguA/',
  instagram: 'https://www.instagram.com/hitechhardwares?igsh=YXVpNHpyeHp2cHdm',
  headOfficePhone: '+91 81224 76567',
  coimbatorePhone: '+91 63817 78251',
  maduraiPhone: '+91 86674 59835',
  adminPhone: '+91 63824 88657',
  heroBanners: [
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%201.png',
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%202.png',
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%203.png'
  ],
  aboutText: 'We, Hi-Tech UPVC Hardwares, are a leading ISO 9001:2015 certified uPVC Hardware provider, with a complete range of uPVC Hardware, Tools, & Accessories, that offers integrated innovative solutions in the area of uPVC Hardware products.',
  aboutImage: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/About%20us%20primary.png',
  aboutTextSecondary: "Over the past few years, we have shown tremendous growth towards of range of uPVC products and based on our prestigious client's request, we have started our own manufacturing towards the usage of uPVC and Aluminum Windows & Doors. We are also an authorized distributor for SIEGENIA hardware and WACKER Silicone products.",
  aboutImageSecondary: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/About%20us%20Second.png',
  strengthImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  contactImage: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Contact%20us.png',
  headerLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/057f20e57dc2cc9f1ecf03e02b74b039c9eb9008/Assets/Hitech%20logo.svg', 
  footerLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/057f20e57dc2cc9f1ecf03e02b74b039c9eb9008/Assets/Hitech%20logo.svg',
  poweredByLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/e6fff671b179d6750fc0bb7b49b4041165679de4/Assets/Group%20107081%201%20(3).svg',
  strengths: [
    { id: '1', iconName: 'Heart', text: 'Generosity in the market.' },
    { id: '2', iconName: 'ShieldCheck', text: 'Ethical business dealings.' },
    { id: '3', iconName: 'Users', text: 'A competent team for delivery.' },
    { id: '4', iconName: 'Globe', text: 'Wide range of network distribution.' },
    { id: '5', iconName: 'BadgePercent', text: 'Most competitive pricing.' },
  ]
};

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'C001', name: 'Drilling Screws MS & SS', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Frame%20Fixing%20Fasteners%20(1).png?raw=true' },
  { id: 'C002', name: 'SS Mesh', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/SS%20Mesh%20(1).png?raw=true' },
  { id: 'C003', name: 'Casement esparg 22mm Back set (PR)', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20esparg%2022mm%20Back%20set%20(1).png?raw=true' },
  { id: 'C004', name: 'Colour Door Handles', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Sliding%20Door%20Set%20-%20D%20Handle%20(1).png?raw=true' },
  { id: 'C005', name: 'CASEMENT HANDLE', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Handle%20Spindle%20(1).png?raw=true' },
  { id: 'C006', name: 'Plastic Items', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Anti%20lift%20Block.png?raw=true' },
  { id: 'C007', name: 'Sliding Handles', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20WH.png?raw=true' },
  { id: 'C008', name: 'Tools', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Gasket%20Mesh%20Tool.png?raw=true' },
  { id: 'C009', name: 'Gaskets', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Gasket%20Mesh%20Tool%20(1).png?raw=true' },
  { id: 'C0010', name: 'Cylinders', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cylinder%20(1).png?raw=true' },
  { id: 'C0011', name: 'Touch locks', image: 'https://github.com/liffto/hitechupvc-new/blob/main/Assets/Touch%20locks%20(1).png?raw=true' }
];

export const INITIAL_PRODUCTS: Product[] = [
  // C001 - Drilling Screws MS & SS
  { id: 'I001', categoryId: 'C001', name: 'Frame Fixing Fasteners', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Frame%20Fixing%20Fasteners%20(1).png?raw=true'], description: 'Frame Fixing Fasteners : 8x60\nFrame Fixing Fasteners : 8x80\nFrame Fixing Fasteners : 8x100\nFrame Fixing Fasteners : 10x100\nFrame Fixing Fasteners : 10x120\nFrame Fixing Fasteners : 10x140\nFrame Fixing Fasteners : 10x160' },
  { id: 'I002', categoryId: 'C001', name: 'CSK Self Drilling Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/CSK%20Self%20Drilling%20Screws%20(1).png?raw=true'], description: 'CSK Self Drilling Screws 3.9x13\nCSK Self Drilling Screws 3.9x16\nCSK Self Drilling Screws 3.9x19\nCSK Self Drilling Screws 3.9x25\nCSK Self Drilling Screws 3.9x32\nCSK Self Drilling Screws 3.9x38\nCSK Self Drilling Screws 4.2x50\nCSK Self Drilling Screws 4.2x60\nCSK Self Drilling Screws 4.2x75' },
  { id: 'I003', categoryId: 'C001', name: 'PAN Head Self Drilling Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/PAN%20Head%20Self%20Drilling%20Screws%20(3).png?raw=true'], description: 'PAN Head Self Drilling Screws 4x16\nPAN Head Self Drilling Screws 4x19\nPAN Head Self Drilling Screws 4x25\nPAN Head Self Drilling Screws 4x32\nPAN Head Self Drilling Screws 4x38\nPAN Head Self Drilling Screws 4x50\nPAN Head Self Drilling Screws 4x60\nPAN Head Self Drilling Screws 4x75' },
  { id: 'I004', categoryId: 'C001', name: 'PAN Head Self Tapping Screws', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/PAN%20Head%20Self%20Drilling%20Screws%20(4).png?raw=true'], description: 'PAN Head Self Tapping Screws 4x13\nPAN Head Self Tapping Screws 4x16\nPAN Head Self Tapping Screws 4x19\nPAN Head Self Tapping Screws 4x25\nPAN Head Self Tapping Screws 4x32\nPAN Head Self Tapping Screws 4x38\nPAN Head Self Tapping Screws 4x50\nPAN Head Self Tapping Screws 4x60\nPAN Head Self Tapping Screws 4x75' },

  // C002 - SS Mesh
  { id: 'I005', categoryId: 'C002', name: 'SS Mesh', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/SS%20Mesh%20(1).png?raw=true'], description: 'SS Mesh (0.25mm) 2.5x50 (125 Feet)\nSS Mesh (0.25mm) 3.0x50 (150 Feet)\nSS Mesh (0.25mm) 3.5x50 (175 Feet)\nSS Mesh (0.25mm) 4.0x50 (200 Feet)\nSS Mesh (0.25mm) 5.0x50 (250 Feet)\nSS Mesh (0.19mm) 3.0x100 (300 Feet)\nSS Mesh (0.19mm) 4.0x100 (400 Feet)\nSS Mesh (0.19mm) 5.0x100 (500 Feet)' },
  { id: 'I006', categoryId: 'C002', name: 'Aluminium Mesh', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Aluminium%20Mesh%20(1).png?raw=true'], description: 'Aluminium Mesh 2.5x100 (250 Feet)\nAluminium Mesh 3.0x 100 (300 Feet)\nAluminium Mesh 3.5x100 (350 Feet)\nAluminium Mesh 4.0x100 (400 Feet)\nAluminium Mesh 5.0x100 (500 Feet)\nAluminium Mesh 14x14 - 3.0x100 (300 Feet)\nAluminium Mesh 14x14 - 4.0x100 (400 Feet)\nAluminium Mesh 14x14 - 5.0x100 (500 Feet)\nAluminium Mesh Black 18x16 - 3.0x100 (300 Feet)\nAluminium Mesh Black 18x16 - 4.0x100 (400 Feet)\nAluminium Mesh Black 18x16 - 5.0x100 (500 Feet)' },
  { id: 'I007', categoryId: 'C002', name: 'Nylon Mesh', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Nylon%20Mesh%20(2).png?raw=true'], description: 'Nylon Mesh 3.0x100 (300 Feet)\nNylon Mesh 4.0x100 (400 Feet)\nNylon Mesh 5.0x100 (500 Feet)' },

  // C003
  { id: 'I008', categoryId: 'C003', name: 'Casement esparg 22mm Back set (PR)', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20esparg%2022mm%20Back%20set%20(1).png?raw=true'], description: 'High quality casement espag with 22mm backset.' },

  // C004 - Colour Door Handles
  { id: 'I009', categoryId: 'C004', name: 'Sliding Door Set - D Handle', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Sliding%20Door%20Set%20-%20D%20Handle%20(1).png?raw=true'], description: 'Premium D Handle set for sliding doors.' },
  { id: 'I010', categoryId: 'C004', name: 'Casement Door Set - Regular', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Door%20Set%20-%20Regular%20(1).png?raw=true'], description: 'Standard handle set for casement doors.' },
  { id: 'I011', categoryId: 'C004', name: 'Casement Door Set - Multipoint/Euro Type', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Euro%20Type.png?raw=true'], description: 'Multipoint security handle set for Euro-style doors.' },

  // C005 - CASEMENT HANDLE
  { id: 'I012', categoryId: 'C005', name: 'Casement Handle Spindle', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Casement%20Handle%20Spindle%20(1).png?raw=true'], description: 'Spindle-driven handle for casement windows.' },
  { id: 'I013', categoryId: 'C005', name: 'Casement Handle American', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/image%20135.png?raw=true'], description: 'American style casement handle.' },
  { id: 'I014', categoryId: 'C005', name: 'Cockspur Handle R', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cockspur%20Handle%20R.png?raw=true'], description: 'Regular cockspur handle for windows.' },
  { id: 'I015', categoryId: 'C005', name: 'Cockspur Handle PR R', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cockspur%20Handle%20PR%20R.png?raw=true'], description: 'Premium cockspur handle set.' },

  // C006 - Plastic Items
  { id: 'I016', categoryId: 'C006', name: 'Fastner Cap', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Fastner%20Cap%20(2).png?raw=true'], description: 'Protective cap for fasteners.' },
  { id: 'I017', categoryId: 'C006', name: 'Window Spacer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Window%20Spacer.png?raw=true'], description: 'Plastic spacer for window profile alignment.' },
  { id: 'I018', categoryId: 'C006', name: 'Door Spacer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Door%20Spacer.png?raw=true'], description: 'Plastic spacer for door systems.' },
  { id: 'I019', categoryId: 'C006', name: 'Fixed Louvers', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Fixed%20Louvers.png?raw=true'], description: 'uPVC fixed louver components.' },
  { id: 'I020', categoryId: 'C006', name: 'Bump Stopper', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Bump%20Stopper.png?raw=true'], description: 'Shock absorbing bump stopper.' },
  { id: 'I021', categoryId: 'C006', name: 'Anti lift Block', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Anti%20lift%20Block%20(1).png?raw=true'], description: 'Security block for sliding systems.' },
  { id: 'I022', categoryId: 'C006', name: 'U Packers', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/U%20Packers.png?raw=true'], description: 'U-shaped packers for glazing.' },
  { id: 'I023', categoryId: 'C006', name: 'Glass Packer', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Glass%20Packer.png?raw=true'], description: 'Standard glass packer support.' },
  { id: 'I024', categoryId: 'C006', name: 'Mesh Stopper', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Plastic%20Items/Mesh%20Stopper.png?raw=true'], description: 'Plastic stopper for screen mesh.' },

  // C007 - Sliding Handles
  { id: 'I025', categoryId: 'C007', name: 'Popup Handle Slim', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20Slim%20(1).png?raw=true'], description: 'Slim design popup handle.' },
  { id: 'I026', categoryId: 'C007', name: 'Popup Handle WH', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Popup%20Handle%20WH.png?raw=true'], description: 'Standard popup handle in white.' },

  // C008 - Tools
  { id: 'I027', categoryId: 'C008', name: 'Gasket Mesh Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Gasket%20Mesh%20Tool.png?raw=true'], description: 'Roller tool for gasket and mesh installation.' },
  { id: 'I028', categoryId: 'C008', name: 'Moon Knife', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Moon%20Knife.png?raw=true'], description: 'Precision moon knife for uPVC trimming.' },
  { id: 'I029', categoryId: 'C008', name: 'Air Block Gun', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Air%20Block%20Gun.png?raw=true'], description: 'Pneumatic installation gun.' },
  { id: 'I030', categoryId: 'C008', name: 'Digital Measuring Meter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Digital%20Measuring%20Meter.png?raw=true'], description: 'High precision digital distance meter.' },
  { id: 'I031', categoryId: 'C008', name: 'V Cutter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/V%20Cutter.png?raw=true'], description: 'Manual V-notch cutter.' },
  { id: 'I032', categoryId: 'C008', name: 'Angle Cutter', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Angle%20Cutter.png?raw=true'], description: 'Angle cutting hand tool.' },
  { id: 'I033', categoryId: 'C008', name: 'Thermocouple', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Thermocouple.png?raw=true'], description: 'Temperature probe for welding machines.' },
  { id: 'I034', categoryId: 'C008', name: 'Corner Cleaning Hand Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Corner%20Cleaning%20Hand%20Tool.png?raw=true'], description: 'Manual scraper for weld cleaning.' },
  { id: 'I035', categoryId: 'C008', name: 'Heating Plate', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Tools/Heating%20Plate.png?raw=true'], description: 'Heating element for profile welding.' },

  // C009 - Gaskets
  { id: 'I036', categoryId: 'C009', name: 'Gasket Mesh Tool', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Gasket%20Mesh%20Tool%20(1).png?raw=true'], description: 'Installation tool for gaskets.' },

  // C0010 - Cylinders
  { id: 'I037', categoryId: 'C0010', name: 'Cylinder', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Cylinder%20(1).png?raw=true'], description: 'High security door cylinder.' },

  // C0011 - Touch locks
  { id: 'I038', categoryId: 'C0011', name: 'Touch Lock', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/Touch%20locks%20(1).png?raw=true'], description: 'Standard touch lock for sliding windows.' },
  { id: 'I039', categoryId: 'C0011', name: 'LG Touch Lock', images: ['https://github.com/liffto/hitechupvc-new/blob/main/Assets/LG%20Touch%20Lock.png?raw=true'], description: 'Premium LG series touch lock.' }
];

export const INITIAL_CATALOGS: Catalog[] = [
  { 
    id: 'c1', 
    name: 'Hi-Tech UPVC Hardwares Main Catalog', 
    image: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Catalog%201.png', 
    fileUrl: 'https://drive.google.com/file/d/1HZBuGxOFmFEtDgxxCftNR-UGaHEP_4CH/view?usp=sharing' 
  },
  { 
    id: 'c2', 
    name: 'Lesso UPVC Window & Doors Technical Manual', 
    image: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Catalog%202.png', 
    fileUrl: 'https://drive.google.com/file/d/1NSeKBA34SGDmVCW6b0g039Az-DVwJ2PH/view?usp=sharing' 
  },
  { 
    id: 'c3', 
    name: 'Gemplast Technical Manual', 
    image: 'https://github.com/liffto/hitechupvchardwares-web/blob/main/Assets/Catalog%203.png?raw=true', 
    fileUrl: 'https://drive.google.com/file/d/1ulfzQF5JbhSFnHebL8nL8YhXQkQowp04/view?usp=sharing' 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 't1', 
    name: 'Project Partner', 
    company: 'Leading Developer', 
    content: 'Hi-Tech UPVC Hardware is our primary supplier. Their items are most reliable and delivery is always on time.', 
    avatar: 'https://i.pravatar.cc/150?u=hitech' 
  }
];

export const INITIAL_GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1513507643916-09250285a49c?auto=format&fit=crop&q=80&w=800', caption: 'Product Display' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', caption: 'Hardware Detail' }
];