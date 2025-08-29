'use client'

import { Activity, GalleryVerticalEnd, Files, Flower, MapPin, ArrowRight, ArrowUpRight, ArrowDownRight, AlertCircle } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts'
import { Card } from '@/components/ui/card'
import { WorldMap } from '@/components/ui/world-map'
import * as React from "react"
import { cn } from "@/lib/utils"

export default function ProductShowcaseSection() {
  const featuredCasestudy = {
    logo: '/mainline-logo.png',
    company: 'Mainline',
    tags: 'Developer Platform',
    title: 'Accelerate Your Development Cycle',
    subtitle: 'Teams using Mainline ship features 3x faster with our integrated workflow automation and deployment tools',
  }

  return (
    <section className="py-12" style={{ backgroundColor: '#FFFBFA' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. MAP - Top Left */}
        <div className="relative rounded-lg overflow-hidden bg-white border border-border h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6 pb-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" />
              Global Infrastructure
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Deploy with confidence worldwide
            </h3>
            <p className="text-muted-foreground">
              Our global edge network ensures your applications are fast and reliable, no matter where your users are located. Experience 99.9% uptime and sub-100ms response times.
            </p>
          </div>
          <div className="relative flex-1 min-h-[300px] mt-4">
            <WorldMap
              dots={[
                {
                  start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                  end: { lat: 40.7128, lng: -74.0060 },    // New York
                },
                {
                  start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                  end: { lat: 51.5074, lng: -0.1278 },     // London
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 },   // London
                  end: { lat: 52.5200, lng: 13.4050 },     // Berlin
                },
                {
                  start: { lat: 52.5200, lng: 13.4050 },   // Berlin
                  end: { lat: 35.6762, lng: 139.6503 },    // Tokyo
                },
                {
                  start: { lat: 35.6762, lng: 139.6503 },  // Tokyo
                  end: { lat: 1.3521, lng: 103.8198 },     // Singapore
                },
                {
                  start: { lat: 1.3521, lng: 103.8198 },   // Singapore
                  end: { lat: -33.8688, lng: 151.2093 },   // Sydney
                }
              ]}
              lineColor="#3b82f6"
            />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground rounded-md text-xs font-medium border border-border/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Live connections from 6+ regions
            </div>
          </div>
        </div>

        {/* 2. FEATURED CASE STUDY BLOCK - Top Right */}
        <div className="relative rounded-lg overflow-hidden bg-white border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
          {/* Colored blocks in background */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              <GalleryVerticalEnd className="w-3.5 h-3.5" /> {featuredCasestudy.tags}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">
              {featuredCasestudy.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {featuredCasestudy.subtitle}
            </p>
            
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4m-8 0l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">CLI & SDKs</h4>
                  <p className="text-sm text-muted-foreground">Deploy with a single command</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Instant Deployments</h4>
                  <p className="text-sm text-muted-foreground">Go from code to production in seconds</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">$</span>
                  <span className="text-foreground">mainline deploy</span>
                  <span className="text-muted-foreground">--prod</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Deploying to production...
                </div>
              </div>
              
              <div className="relative z-20">
                <button className="w-full mt-4 px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors shadow-sm">
                  Get Started with Mainline
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative z-0 flex justify-center items-center w-full mt-4 h-28">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent"></div>
            <MainlineFeaturedMessageCard />
          </div>
          
          <div className="relative z-10 flex justify-end">
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-accent transition-colors">
              View case study
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3. CHART - Bottom Left */}
        <div className="relative rounded-lg overflow-hidden bg-white border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
          {/* Wave background */}
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 C30 28, 70 -8, 100 10 L100 20 L0 20 Z" fill="#3b82f6" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <Activity className="w-4 h-4 text-primary" />
              </div>
              <span>Performance Metrics</span>
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Real-time build and deployment metrics
              <span className="block text-lg font-normal text-muted-foreground mt-1">
                Monitor your development pipeline with our comprehensive analytics dashboard
              </span>
            </h3>
            
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="bg-muted/20 p-3 rounded-lg border border-border/30">
                <div className="text-xs text-muted-foreground">Build Time</div>
                <div className="text-lg font-semibold mt-0.5">1.2s</div>
                <div className="text-[10px] text-green-500 flex items-center mt-0.5">
                  <ArrowUpRight className="w-2.5 h-2.5 mr-0.5" />
                  12% faster
                </div>
              </div>
              <div className="bg-muted/20 p-3 rounded-lg border border-border/30">
                <div className="text-xs text-muted-foreground">Deploys</div>
                <div className="text-lg font-semibold mt-0.5">42/day</div>
                <div className="text-[10px] text-green-500 flex items-center mt-0.5">
                  <ArrowUpRight className="w-2.5 h-2.5 mr-0.5" />
                  8% inc
                </div>
              </div>
              <div className="bg-muted/20 p-3 rounded-lg border border-border/30">
                <div className="text-xs text-muted-foreground">Cost</div>
                <div className="text-lg font-semibold mt-0.5">$0.023/req</div>
                <div className="text-[10px] text-green-500 flex items-center mt-0.5">
                  <ArrowDownRight className="w-2.5 h-2.5 mr-0.5" />
                  15% saved
                </div>
              </div>
              <div className="bg-muted/20 p-3 rounded-lg border border-border/30">
                <div className="text-xs text-muted-foreground">P99 Latency</div>
                <div className="text-lg font-semibold mt-0.5">128ms</div>
                <div className="text-[10px] text-amber-500 flex items-center mt-0.5">
                  <AlertCircle className="w-2.5 h-2.5 mr-0.5" />
                  On target
                </div>
              </div>
            </div>
            
            <div className="relative h-40">
              <MonitoringChart />
              
              {/* Animated wave overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
              
              {/* Legend */}
              <div className="absolute top-4 right-4 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Desktop</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-1.5 bg-blue-300 rounded-full"></div>
                  <span>Mobile</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold text-foreground">+42.8%</div>
                <div className="text-sm text-muted-foreground">vs last month</div>
              </div>
              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                View full report
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. ALL FEATURE CARDS - Bottom Right */}
        <div className="grid sm:grid-cols-2 rounded-lg overflow-hidden bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
          <FeatureCard
            icon={<Files className="w-4 h-4" />}
            title="Developer Experience"
            subtitle="Built for Devs"
            description="Tools and APIs designed with developer productivity as the top priority."
          />
          <FeatureCard
            icon={<Flower className="w-4 h-4" />}
            title="Infrastructure as Code"
            subtitle="GitOps Ready"
            description="Define, deploy, and manage your infrastructure with familiar workflows."
          />
        </div>
      </div>
    </section>
  )
}

// ----------------- Feature Card Component -------------------
function FeatureCard({ icon, title, subtitle, description }: { icon: React.ReactNode, title: string, subtitle: string, description: string }) {
  return (
    <div className="relative flex flex-col gap-3 p-4 border border-border bg-background transition">
      <div className="flex items-center gap-4">
        <div>
          <span className="text-xs flex items-center gap-2 text-muted-foreground mb-4">
            {icon}
            {title}
          </span>
          <h3 className="text-lg font-normal text-foreground">
            {subtitle}{" "}
            <span className="text-muted-foreground">{description}</span>
          </h3>
        </div>
      </div>

      {/* Card pinned to bottom right */}
      <Card className="absolute bottom-0 right-0 w-24 h-20 sm:w-32 sm:h-28 md:w-40 md:h-32 border-8 border-r-0 border-b-0 rounded-tl-xl rounded-br-none rounded-tr-none rounded-bl-none overflow-hidden">
      </Card>

      {/* Arrow icon on top of Card */}
      <div className="absolute bottom-2 right-2 p-3 flex items-center gap-2 border border-border rounded-full hover:-rotate-45 transition z-10 bg-background">
        <ArrowRight className="w-4 h-4 text-primary" />
      </div>
    </div>
  )
}

// ----------------- Map Connections -------------------
const MapConnections = () => {
  const [connections, setConnections] = React.useState<Array<{
    id: number;
    points: string;
    active: boolean;
    speed: number;
  }>>([]);

  React.useEffect(() => {
    const hubs = [
      { x: 25, y: 35, name: 'NA East', region: 'americas' },
      { x: 15, y: 40, name: 'NA Central', region: 'americas' },
      { x: 75, y: 35, name: 'NA West', region: 'americas' },
      { x: 50, y: 50, name: 'EU Central', region: 'europe' },
      { x: 60, y: 45, name: 'EU West', region: 'europe' },
      { x: 85, y: 55, name: 'Asia', region: 'asia' },
      { x: 80, y: 40, name: 'Japan', region: 'asia' },
    ];

    const newConnections = [];
    
    for (let i = 0; i < hubs.length; i++) {
      for (let j = i + 1; j < Math.min(i + 3, hubs.length); j++) {
        const hubA = hubs[i];
        const hubB = hubs[j];
        const isActive = Math.random() > 0.3;
        const speed = 1 + Math.random() * 3;
        
        newConnections.push({
          id: i * 100 + j,
          points: `M${hubA.x},${hubA.y} Q${(hubA.x + hubB.x) / 2 + (Math.random() * 10 - 5)},${(hubA.y + hubB.y) / 2} ${hubB.x},${hubB.y}`,
          active: isActive,
          speed: isActive ? speed : 0
        });
      }
    }
    
    setConnections(newConnections);
  }, []);

  const [dashOffset, setDashOffset] = React.useState(0);
  
  React.useEffect(() => {
    const animate = () => {
      setDashOffset(prev => (prev + 0.5) % 20);
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      {connections.map((conn) => (
        <path
          key={conn.id}
          d={conn.points}
          stroke={conn.active ? '#3b82f6' : '#e2e8f0'}
          strokeWidth={conn.active ? 0.8 : 0.2}
          strokeDasharray={conn.active ? '5,5' : '2,2'}
          strokeDashoffset={conn.active ? -dashOffset * conn.speed : 0}
          fill="none"
          className="transition-all duration-300"
        />
      ))}
    </>
  );
};

// ----------------- Map Hubs -------------------
const MapHubs = () => {
  const [hubs] = React.useState([
    { x: 25, y: 35, name: 'NA East', region: 'americas' },
    { x: 15, y: 40, name: 'NA Central', region: 'americas' },
    { x: 75, y: 35, name: 'NA West', region: 'americas' },
    { x: 50, y: 50, name: 'EU Central', region: 'europe' },
    { x: 60, y: 45, name: 'EU West', region: 'europe' },
    { x: 85, y: 55, name: 'Asia', region: 'asia' },
    { x: 80, y: 40, name: 'Japan', region: 'asia' },
  ]);

  const getRegionColor = (region: string) => {
    switch(region) {
      case 'americas': return '#3b82f6';
      case 'europe': return '#8b5cf6';
      case 'asia': return '#10b981';
      default: return '#64748b';
    }
  };

  return (
    <>
      {hubs.map((hub) => (
        <g key={hub.name} className="group cursor-pointer">
          {/* Connection glow effect */}
          <circle
            cx={hub.x}
            cy={hub.y}
            r={6}
            fill={getRegionColor(hub.region)}
            className="opacity-10 group-hover:opacity-30 transition-opacity duration-300"
          />
          
          {/* Main hub dot */}
          <circle
            cx={hub.x}
            cy={hub.y}
            r={2.5}
            fill={getRegionColor(hub.region)}
            className="group-hover:scale-150 transition-transform duration-300"
          />
          
          {/* Pulse animation on hover */}
          <circle
            cx={hub.x}
            cy={hub.y}
            r={4}
            fill="none"
            stroke={getRegionColor(hub.region)}
            strokeWidth="1"
            className="opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"
          />
          
          {/* Hub label */}
          <text
            x={hub.x + 5}
            y={hub.y + 3}
            fontSize="3"
            fontWeight="500"
            fill="currentColor"
            className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {hub.name}
          </text>
        </g>
      ))}
    </>
  );
};

// ----------------- Map -------------------
const Map = () => {
  return (
    <div className="relative w-full h-105 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border border-border/30 rounded-lg">
      <div className="absolute inset-0 bg-grid-indigo-100/20 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.8))]" style={{ height: '100%' }}>
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 60" 
          preserveAspectRatio="none"
        >
          {/* World map outline - more detailed */}
          <path 
            d="M10,30 Q15,20 25,25 T40,20 T55,25 T70,20 T85,25 L90,30 L95,40 L85,45 L75,40 L65,45 L55,40 L45,45 L35,40 L25,45 L15,40 Z" 
            fill="#f8fafc" 
            stroke="#e2e8f0"
            strokeWidth="0.4"
            className="drop-shadow-sm"
          />
          
          {/* Connection lines between hubs */}
          <MapConnections />
          
          {/* Tech hubs with interactive elements */}
          <MapHubs />
          
          {/* Subtle grid lines */}
          <g stroke="#e2e8f0" strokeWidth="0.3" strokeDasharray="2,2" opacity="0.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="60" />
            ))}
          </g>
        </svg>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-2 right-2 flex items-center gap-2 text-xs bg-white/80 backdrop-blur-sm px-2 py-1 rounded border border-border/20">
        <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> Americas</span>
        <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-violet-500 mr-1"></span> Europe</span>
        <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span> Asia</span>
      </div>
      
      {/* Location pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </div>
      
      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-50 border-t border-gray-200 flex items-center px-4 justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs font-medium">All systems operational</span>
        </div>
        <span className="text-xs text-gray-500">Last updated: Just now</span>
      </div>
    </div>
  );
}

// ----------------- Chart Data -------------------
const chartData = [
  { month: 'May', desktop: 56, mobile: 224 },
  { month: 'June', desktop: 90, mobile: 300 },
  { month: 'July', desktop: 126, mobile: 252 },
  { month: 'Aug', desktop: 205, mobile: 410 },
  { month: 'Sep', desktop: 200, mobile: 126 },
  { month: 'Oct', desktop: 400, mobile: 800 },
]

const chartConfig = {
  desktop: {
    label: 'Mainline Dashboard (Desktop)',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mainline App (Mobile)',
    color: '#60a5fa',
  },
}

// ----------------- Monitoring Chart -------------------
function MonitoringChart() {
  return (
    <div className="relative w-full h-56">
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity={0.8} />
            <stop offset="55%" stopColor="#2563eb" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.8} />
            <stop offset="55%" stopColor="#60a5fa" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis hide />
        <YAxis hide />
        <CartesianGrid vertical={false} horizontal={false} />
        <Area strokeWidth={2} dataKey="mobile" type="monotone" fill="url(#fillMobile)" stroke="#60a5fa" />
        <Area strokeWidth={2} dataKey="desktop" type="monotone" fill="url(#fillDesktop)" stroke="#2563eb" />
      </AreaChart>
    </div>
  )
}

// ----------------- Message Card -------------------
const messages = [
  {
    title: "Mainline Design",
    time: "1m ago",
    content: "New components added to your team workspace.",
    color: "from-pink-400 to-indigo-500",
  },
  {
    title: "Pro User Feedback",
    time: "3m ago",
    content: "You've received 8 new user reviews this week.",
    color: "from-orange-500 to-pink-500",
  },
  {
    title: "Billing Alert",
    time: "6m ago",
    content: "Your subscription was successfully renewed.",
    color: "from-yellow-400 to-red-400",
  },
  {
    title: "Integration Hub",
    time: "10m ago",
    content: "Figma plugin connected to your dashboard.",
    color: "from-sky-400 to-blue-700",
  },
  {
    title: "Product Analytics",
    time: "12m ago",
    content: "Dashboard insights updated with latest metrics.",
    color: "from-orange-300 to-fuchsia-500",
  },
  {
    title: "Weekly Recap",
    time: "15m ago",
    content: "Here's what your team accomplished this week.",
    color: "from-green-400 to-blue-500",
  },
];

const MainlineFeaturedMessageCard = () => {
  return (
    <div className="w-full max-w-sm h-[280px] bg-background p-2 overflow-hidden font-sans relative">
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      <div className="space-y-2 relative z-0">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 items-start p-3 border border-border rounded-lg transform transition duration-300 ease-in-out cursor-pointer animate-scaleUp`}
            style={{
              animationDelay: `${i * 300}ms`,
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            <div className={`w-8 h-8 min-w-[2rem] min-h-[2rem] rounded-lg bg-gradient-to-br ${msg.color}`} />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                {msg.title}
                <span className="text-xs text-muted-foreground before:content-['•'] before:mr-1">
                  {msg.time}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                {msg.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
