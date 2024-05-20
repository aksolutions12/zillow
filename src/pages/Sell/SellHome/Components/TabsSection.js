import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import cardimg from "../../../../assets/images/womenonporch.jpg";

const tabData = [
  {
    title: "Preparing to Sell",
    cards: [
      {
        title: "How to Sell a House As-Is When It Needs Repairs?",
        description:
          "What does it mean to sell a house as-is? Consider your options when you don't want to complete a long list of repairs before selling. Explore the best home improvements for resale and how to market your fixer-upper to sell quickly.",
        image: cardimg,
      },
      {
        title: "For Sale by Owner (FSBO) vs. Real Estate Agent?",
        description:
          "When selling your home, a big decision awaits: Will you list with a real estate agent or list on your own as a for sale by owner (FSBO). Explore the benefits and drawbacks to both. Read on to make the best decision for your sale.",
        image: cardimg,
      },
      {
        title: "How to Sell My House Fast",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
      {
        title: "Steps to Selling a House",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
    ],
  },
  {
    title: "Timing Your Sale",
    cards: [
      {
        title: "How Soon Can I Sell My House After Purchase?",
        description:
          "What does it mean to sell a house as-is? Consider your options when you don't want to complete a long list of repairs before selling. Explore the best home improvements for resale and how to market your fixer-upper to sell quickly.",
        image: cardimg,
      },
      {
        title: "Selling a Property With Tenants",
        description:
          "When selling your home, a big decision awaits: Will you list with a real estate agent or list on your own as a for sale by owner (FSBO). Explore the benefits and drawbacks to both. Read on to make the best decision for your sale.",
        image: cardimg,
      },
      {
        title: "Can You Sell Your House Before Paying Off the Mortgage?",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
      {
        title: "What Happens When You Inherit a House?",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
    ],
  },
  {
    title: "Pricing Your Home",
    cards: [
      {
        title: "How to Price Your Home to Sell?",
        description:
          "What does it mean to sell a house as-is? Consider your options when you don't want to complete a long list of repairs before selling. Explore the best home improvements for resale and how to market your fixer-upper to sell quickly.",
        image: cardimg,
      },
      {
        title: "Best Home Improvements to Increase Value",
        description:
          "When selling your home, a big decision awaits: Will you list with a real estate agent or list on your own as a for sale by owner (FSBO). Explore the benefits and drawbacks to both. Read on to make the best decision for your sale.",
        image: cardimg,
      },
      {
        title: "HTips for Negotiating With Real Estate Agents",

        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
      {
        title: "How to Calculate Home Equity",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
    ],
  },
  {
    title: "Getting noticed",
    cards: [
      {
        title: "How to Market Your Home for Sale",
        description:
          "What does it mean to sell a house as-is? Consider your options when you don't want to complete a long list of repairs before selling. Explore the best home improvements for resale and how to market your fixer-upper to sell quickly.",
        image: cardimg,
      },
      {
        title:
          "Property Descriptions 101: How to Write Listing Descriptions That Sell",
        description:
          "When selling your home, a big decision awaits: Will you list with a real estate agent or list on your own as a for sale by owner (FSBO). Explore the benefits and drawbacks to both. Read on to make the best decision for your sale.",
        image: cardimg,
      },
      {
        title: "Exterior Home Improvements for Resale",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
      {
        title: "Tips for Showing Your House",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
    ],
  },
  {
    title: "Offers, closing & moving",
    cards: [
      {
        title: "How Much Are Closing Costs for Sellers?",
        description:
          "What does it mean to sell a house as-is? Consider your options when you don't want to complete a long list of repairs before selling. Explore the best home improvements for resale and how to market your fixer-upper to sell quickly.",
        image: cardimg,
      },
      {
        title: "The Home-Selling Process for an All-Cash Deal",
        description:
          "When selling your home, a big decision awaits: Will you list with a real estate agent or list on your own as a for sale by owner (FSBO). Explore the benefits and drawbacks to both. Read on to make the best decision for your sale.",
        image: cardimg,
      },
      {
        title: "The Appraisal Came in Low - Now What?",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
      {
        title: "Should I Sell to a Home Investors?",
        description:
          "Need to sell your house fast? Consider investors or iBuyers. Otherwise, quick home sales rely on precise pricing, professional cleaning, marketing and negotiating. Follow these nine steps to sell fast.",
        image: cardimg,
      },
    ],
  },
];

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabsSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="tabs"
        >
          {tabData.map((tab, index) => (
            <Tab key={index} label={tab.title} />
          ))}
        </Tabs>
      </Box>
      {tabData.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tab.cards.map((card, cardIndex) => (
              <Card key={cardIndex} sx={{ maxWidth: "280px", width: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}

export default TabsSection;
