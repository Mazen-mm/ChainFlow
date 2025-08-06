
import { BoxIcon, DocIcon, LockIcon } from "../../../assets/Icons/SVG";


export default function usePartners () {

  const partners = [
    {
      id: 1,
      name: "Global Logistics Inc.",
      type: "Logistics",
      avatar: "🚚",
      status: "online",
      lastActivity: "2 hours ago",
      connectedSince: "Jan 15, 2023",
      ordersProcessed: 1245,
      onTimeDelivery: "98.5%",
      activeShipments: 37,
      permissions: [
        { category: "Order Information", access: "Full access", icon: <BoxIcon/> },
        { category: "Order Information", access: "Limited access", icon: "🎯" },
        { category: "Order Information", access: "Full access", icon: <BoxIcon/> },
        { category: "Order Information", access: "No access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Shared new shipping document", time: "2 hours ago", icon: <DocIcon fill={'#061726'}/>  },
        { action: "Updated order #GL-7829", time: "5 hours ago", icon: <BoxIcon/> },
        { action: "Modified access permissions", time: "1 day ago", icon: <LockIcon/> }
      ]
    },
    {
      id: 2,
      name: "Acme Manufacturing",
      type: "Manufacturers",
      avatar: "🏭",
      status: "offline",
      lastActivity: "A day ago",
      connectedSince: "Mar 22, 2023",
      ordersProcessed: 892,
      onTimeDelivery: "95.2%",
      activeShipments: 24,
      permissions: [
        { category: "Order Information", access: "Full access", icon: "📦" },
        { category: "Order Information", access: "Full access", icon: "🎯" },
        { category: "Order Information", access: "Limited access", icon: "📋" },
        { category: "Order Information", access: "Full access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Updated production schedule", time: "1 day ago", icon: "📋" },
        { action: "Completed order #AM-5641", time: "2 days ago", icon: "📦" },
        { action: "Shared quality report", time: "3 days ago", icon: "🔒" }
      ]
    },
    {
      id: 3,
      name: "EastWest Suppliers",
      type: "Suppliers",
      avatar: "📦",
      status: "online",
      lastActivity: "3 hours ago",
      connectedSince: "Feb 08, 2023",
      ordersProcessed: 1567,
      onTimeDelivery: "97.8%",
      activeShipments: 45,
      permissions: [
        { category: "Order Information", access: "Limited access", icon: "📦" },
        { category: "Order Information", access: "Full access", icon: "🎯" },
        { category: "Order Information", access: "Full access", icon: "📋" },
        { category: "Order Information", access: "No access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Inventory update received", time: "3 hours ago", icon: "📋" },
        { action: "New supplier onboarded", time: "1 day ago", icon: "📦" },
        { action: "Price list updated", time: "2 days ago", icon: "🔒" }
      ]
    },
    {
      id: 4,
      name: "Metro Warehousing",
      type: "Warehouses",
      avatar: "🏢",
      status: "online",
      lastActivity: "5 hours ago",
      connectedSince: "Apr 10, 2023",
      ordersProcessed: 723,
      onTimeDelivery: "99.1%",
      activeShipments: 18,
      permissions: [
        { category: "Order Information", access: "Full access", icon: "📦" },
        { category: "Order Information", access: "Full access", icon: "🎯" },
        { category: "Order Information", access: "Full access", icon: "📋" },
        { category: "Order Information", access: "Limited access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Warehouse capacity updated", time: "5 hours ago", icon: "📋" },
        { action: "Storage optimization completed", time: "8 hours ago", icon: "📦" },
        { action: "Security protocols updated", time: "1 day ago", icon: "🔒" }
      ]
    },
    {
      id: 5,
      name: "Retail Chain Co.",
      type: "Retailers",
      avatar: "🏪",
      status: "offline",
      lastActivity: "2 days ago",
      connectedSince: "May 15, 2023",
      ordersProcessed: 456,
      onTimeDelivery: "93.7%",
      activeShipments: 12,
      permissions: [
        { category: "Order Information", access: "No access", icon: "📦" },
        { category: "Order Information", access: "Limited access", icon: "🎯" },
        { category: "Order Information", access: "Full access", icon: "📋" },
        { category: "Order Information", access: "Full access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Store inventory synchronized", time: "2 days ago", icon: "📋" },
        { action: "Promotion campaign launched", time: "3 days ago", icon: "📦" },
        { action: "Customer feedback analyzed", time: "4 days ago", icon: "🔒" }
      ]
    }
  ];
  return {
    partners,
  };

};