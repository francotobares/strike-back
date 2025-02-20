const { sequelize } = require('./connection');
const Vulnerability = require('../models/vulnerability');

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });

    const vulnerabilities = await Vulnerability.bulkCreate([
      {
        title: 'SQL Injection in Login Form',
        description: 'A SQL injection vulnerability was found in the login form that could allow unauthorized access.',
        severity: 'High',
        affectedComponent: 'Authentication System',
        reporter: 'John Doe',
        cwe: 'CWE-89',
        technicalImpact: 'Potential database compromise',
        poc: 'username=admin\' OR \'1\'=\'1',
        suggestedFix: 'Implement prepared statements and input validation',
        state: 'Open',
        impact: 'Could allow unauthorized access to user accounts'
      },
      {
        title: 'Cross-Site Scripting in Comment Section',
        description: 'XSS vulnerability detected in the blog comment section',
        severity: 'Medium',
        affectedComponent: 'Blog Module',
        reporter: 'Jane Smith',
        cwe: 'CWE-79',
        technicalImpact: 'Client-side code execution',
        poc: '<script>alert("XSS")</script>',
        suggestedFix: 'Implement proper output encoding',
        state: 'In Progress',
        impact: 'Could allow attackers to steal user sessions'
      },
      {
        title: 'Insecure Direct Object Reference',
        description: 'IDOR vulnerability in user profile endpoint',
        severity: 'Critical',
        affectedComponent: 'User Management',
        reporter: 'Alice Security',
        cwe: 'CWE-639',
        technicalImpact: 'Unauthorized access to user data',
        poc: 'Changing user_id parameter in request',
        suggestedFix: 'Implement proper access controls',
        state: 'Open',
        impact: 'Unauthorized access to user information'
      }
    ]);

    console.log('Database seeded successfully!');
    return vulnerabilities;
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run the seed function if this file is run directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}

module.exports = { seedDatabase }; 