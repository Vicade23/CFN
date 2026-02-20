
// import { GoogleGenAI, Type } from "@google/genai";

// // Initialize GoogleGenAI strictly following the guideline: Always use {apiKey: process.env.API_KEY}
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// export const getCloudInsights = async (spendData: any) => {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-3-flash-preview",
//       contents: `Analyze this cloud spending data and provide 3 actionable optimization tips in a short paragraph format: ${JSON.stringify(spendData)}`,
//       config: {
//         systemInstruction: "You are a cloud infrastructure cost optimization expert for Billsnest. Keep insights concise, professional, and helpful.",
//         responseMimeType: "application/json",
//         responseSchema: {
//           type: Type.ARRAY,
//           items: {
//             type: Type.OBJECT,
//             properties: {
//               title: { type: Type.STRING },
//               description: { type: Type.STRING },
//               potentialSavings: { type: Type.STRING }
//             },
//             required: ["title", "description", "potentialSavings"]
//           }
//         }
//       }
//     });
    
//     // Access response.text as a property directly, not a method.
//     return JSON.parse(response.text || "[]");
//   } catch (error) {
//     console.error("Gemini Insights Error:", error);
//     return [
//       {
//         title: "Reserved Instances",
//         description: "Move long-running production workloads from On-Demand to Reserved Instances.",
//         potentialSavings: "$450/mo"
//       },
//       {
//         title: "Zombie Instances",
//         description: "Identify and terminate 4 idle EC2 instances in us-east-1.",
//         potentialSavings: "$120/mo"
//       }
//     ];
//   }
// };
