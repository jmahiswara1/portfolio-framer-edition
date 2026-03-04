import { motion } from "framer-motion";

// Defines the visual style of the wireframe
const STROKE_COLOR = "rgba(0, 0, 0, 0.15)";
const STROKE_WIDTH = 1.25;

// Grid and scaling constants
const UNIT = 40; // Reduced size of the block (was 50)
const GRID_SCALE = 50; // Reduced distance between grid cells (was 85)

// Utility to convert grid coordinates to screen coordinates
const getPos = (x, y, z = 0) => ({
    cx: 920 + (x - y) * GRID_SCALE, // Shift right by 200px (was 720)
    cy: 400 + (x + y) * (GRID_SCALE / 2) - z
});

// Utility to get the bottom center of a grid cell (for connecting lines)
const floorPos = (x, y) => {
    const { cx, cy } = getPos(x, y, 0);
    return `${cx},${cy}`;
};

// --- ICON COMPONENTS ---
const DatabaseIcon = () => (
    <svg x="-16" y="-16" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={STROKE_COLOR} strokeWidth={2}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5" />
        <path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12" />
    </svg>
);

const GearIcon = () => (
    <svg x="-16" y="-16" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={STROKE_COLOR} strokeWidth={2}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
);

const CodeIcon = () => (
    <svg x="-16" y="-16" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={STROKE_COLOR} strokeWidth={2}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const FolderIcon = () => (
    <svg x="-16" y="-16" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={STROKE_COLOR} strokeWidth={2}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
);

const UserIcon = () => (
    <svg x="-16" y="-16" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={STROKE_COLOR} strokeWidth={2}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const CloudIcon = () => (
    <svg x="-16" y="-16" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={STROKE_COLOR} strokeWidth={2}>
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
);

const GlobeIcon = () => (
    <svg x="-16" y="-16" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={STROKE_COLOR} strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
    </svg>
);

// --- ISOMETRIC BLOCK COMPONENT ---
// Renders a 3D box at the specified grid coordinates
function IsoBlock({ x, y, z = 0, h = 40, delay = 0, icon, stacked = false, hasBase = true }) {
    const { cx, cy } = getPos(x, y, z);
    const w = UNIT;

    // Calculate corners for the faces
    const topFace = `M ${cx} ${cy - h} L ${cx + w} ${cy - h - w / 2} L ${cx} ${cy - h - w} L ${cx - w} ${cy - h - w / 2} Z`;
    const leftFace = `M ${cx} ${cy - h} L ${cx - w} ${cy - h - w / 2} L ${cx - w} ${cy - w / 2} L ${cx} ${cy} Z`;
    const rightFace = `M ${cx} ${cy - h} L ${cx + w} ${cy - h - w / 2} L ${cx + w} ${cy - w / 2} L ${cx} ${cy} Z`;

    // Base platform (larger, invisible box with dashes)
    const wB = w * 1.5;
    const baseFace = `M ${cx} ${cy + 15} L ${cx + wB} ${cy - wB / 2 + 15} L ${cx} ${cy - wB + 15} L ${cx - wB} ${cy - wB / 2 + 15} Z`;

    const drawShape = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { pathLength: { delay, duration: 1.5, ease: "easeInOut" }, opacity: { delay, duration: 0.1 } }
        }
    };

    return (
        <g>
            {/* Base Platform */}
            {hasBase && (
                <motion.path
                    d={baseFace}
                    fill="rgba(242, 242, 242, 0.4)"
                    stroke={STROKE_COLOR}
                    strokeWidth={1}
                    strokeLinejoin="round"
                    strokeDasharray="4 4"
                    variants={drawShape} initial="hidden" animate="visible"
                />
            )}

            {/* Main Block Faces */}
            {/* fill="#F2F2F2" obscures lines behind the block but leaves the background intact */}
            <motion.path d={leftFace} fill="rgba(242,242,242, 0.8)" stroke={STROKE_COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" variants={drawShape} initial="hidden" animate="visible" />
            <motion.path d={rightFace} fill="rgba(242,242,242, 0.8)" stroke={STROKE_COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" variants={drawShape} initial="hidden" animate="visible" />
            <motion.path d={topFace} fill="rgba(242,242,242, 0.8)" stroke={STROKE_COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" variants={drawShape} initial="hidden" animate="visible" />

            {/* Stacked details (adds internal lines to look like 2 generic blocks stacked) */}
            {stacked && (
                <>
                    <motion.path d={`M ${cx - w} ${cy - h / 2 - w / 2} L ${cx} ${cy - h / 2} L ${cx + w} ${cy - h / 2 - w / 2}`} fill="none" stroke={STROKE_COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" variants={drawShape} initial="hidden" animate="visible" />
                    <motion.path d={`M ${cx} ${cy - h} L ${cx} ${cy}`} fill="none" stroke={STROKE_COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" variants={drawShape} initial="hidden" animate="visible" />
                </>
            )}

            {/* Icon Transformation - flattens a 2D icon onto the top isometric plane */}
            {icon && (
                <g transform={`translate(${cx}, ${cy - h - w / 2}) scale(1, 0.5) rotate(-45)`}>
                    <motion.g variants={drawShape} initial="hidden" animate="visible">
                        {icon}
                    </motion.g>
                </g>
            )}
        </g>
    );
}

// --- CONNECTING LINES ---
const IsoLine = ({ path, delay = 0 }) => {
    const drawLine = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { pathLength: { delay, duration: 2, ease: "easeInOut" }, opacity: { delay, duration: 0.1 } }
        }
    };
    return (
        <motion.path
            d={path}
            fill="none"
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WIDTH}
            markerEnd="url(#arrow)"
            variants={drawLine}
            initial="hidden"
            animate="visible"
        />
    );
};


export default function TechBackground() {
    // Sort blocks by depth (x + y). 
    // Lower values are further back and should be rendered first for correct occlusion.
    const blocks = [
        { x: -1, y: -4, icon: <CloudIcon /> },
        { x: -1.5, y: -1.5, icon: <GearIcon /> },
        { x: -2.5, y: 1.5, icon: <FolderIcon /> },
        { x: 0, y: 0, icon: <DatabaseIcon />, stacked: true, h: 40 }, // Adjusted height to match new scale
        { x: 2, y: -1.5, icon: <CodeIcon />, stacked: true },
        { x: 1, y: 3, icon: <UserIcon /> },
        { x: 4, y: 2, icon: <GlobeIcon /> }
    ].sort((a, b) => (a.x + a.y) - (b.x + b.y));

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40 mix-blend-multiply">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 900"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 1 L 8 5 L 0 9 z" fill={STROKE_COLOR} />
                    </marker>
                </defs>

                {/* Lines (rendered first so blocks sit on top of them) */}
                {/* Cloud (-1,-4) -> Gear (-1.5,-1.5) */}
                <IsoLine delay={0.5} path={`M ${floorPos(-1, -4)} L ${floorPos(-1.5, -4)} L ${floorPos(-1.5, -1.5)}`} />

                {/* Gear (-1.5,-1.5) -> DB (0,0) */}
                <IsoLine delay={1.0} path={`M ${floorPos(-1.5, -1.5)} L ${floorPos(-1.5, 0)} L ${floorPos(0, 0)}`} />

                {/* Folder (-2.5,1.5) -> DB (0,0) */}
                <IsoLine delay={1.5} path={`M ${floorPos(-2.5, 1.5)} L ${floorPos(-2.5, 0)} L ${floorPos(0, 0)}`} />

                {/* DB (0,0) -> Code (2,-1.5) */}
                <IsoLine delay={2.0} path={`M ${floorPos(0, 0)} L ${floorPos(2, 0)} L ${floorPos(2, -1.5)}`} />

                {/* Code (2,-1.5) -> Globe (4,2) */}
                <IsoLine delay={2.5} path={`M ${floorPos(2, -1.5)} L ${floorPos(4, -1.5)} L ${floorPos(4, 2)}`} />

                {/* User (1,3) -> DB (0,0) */}
                <IsoLine delay={2.0} path={`M ${floorPos(1, 3)} L ${floorPos(1, 0)} L ${floorPos(0, 0)}`} />


                {/* Render Blocks sorted by depth */}
                {blocks.map((b, i) => (
                    <IsoBlock
                        key={`${b.x}-${b.y}`}
                        x={b.x}
                        y={b.y}
                        icon={b.icon}
                        stacked={b.stacked}
                        h={b.h || 40}
                        delay={0.2 * i}
                    />
                ))}

            </svg>
        </div>
    );
}
