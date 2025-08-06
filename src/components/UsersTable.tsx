import React, { useState } from 'react';
import { Search, Filter, Users, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const users = [
    { id: 1, name: 'राम प्रकाश सिंह', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2019-03-15', milkQuantity: '25 L/day' },
    { id: 2, name: 'सुनीता देवी', gender: 'Female', village: 'Indour', regular: true, joinDate: '2020-01-20', milkQuantity: '18 L/day' },
    { id: 3, name: 'मनोज कुमार', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2018-07-10', milkQuantity: '30 L/day' },
    { id: 4, name: 'गीता देवी', gender: 'Female', village: 'Kochas', regular: true, joinDate: '2021-02-05', milkQuantity: '22 L/day' },
    { id: 5, name: 'राजेश यादव', gender: 'Male', village: 'Dinara', regular: false, joinDate: '2020-09-12', milkQuantity: '15 L/day' },
    { id: 6, name: 'प्रिया सिंह', gender: 'Female', village: 'Delhuan', regular: true, joinDate: '2019-11-08', milkQuantity: '20 L/day' },
    { id: 7, name: 'अनिल कुमार', gender: 'Male', village: 'Indour', regular: true, joinDate: '2018-05-22', milkQuantity: '28 L/day' },
    { id: 8, name: 'रीता देवी', gender: 'Female', village: 'Delhuan', regular: false, joinDate: '2021-06-15', milkQuantity: '12 L/day' },
    { id: 9, name: 'विकास सिंह', gender: 'Male', village: 'Kochas', regular: true, joinDate: '2019-08-30', milkQuantity: '26 L/day' },
    { id: 10, name: 'कमला देवी', gender: 'Female', village: 'Dinara', regular: true, joinDate: '2020-04-18', milkQuantity: '24 L/day' },
    { id: 11, name: 'संजय कुमार', gender: 'Male', village: 'Delhuan', regular: false, joinDate: '2021-01-10', milkQuantity: '16 L/day' },
    { id: 12, name: 'शांति देवी', gender: 'Female', village: 'Indour', regular: true, joinDate: '2018-12-05', milkQuantity: '21 L/day' },
    { id: 13, name: 'राहुल सिंह', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2019-06-25', milkQuantity: '27 L/day' },
    { id: 14, name: 'मीरा देवी', gender: 'Female', village: 'Kochas', regular: false, joinDate: '2020-11-12', milkQuantity: '14 L/day' },
    { id: 15, name: 'अमित कुमार', gender: 'Male', village: 'Dinara', regular: true, joinDate: '2018-09-18', milkQuantity: '29 L/day' },
    { id: 16, name: 'सरला देवी', gender: 'Female', village: 'Delhuan', regular: true, joinDate: '2020-07-22', milkQuantity: '23 L/day' },
    { id: 17, name: 'दीपक सिंह', gender: 'Male', village: 'Indour', regular: false, joinDate: '2021-03-08', milkQuantity: '17 L/day' },
    { id: 18, name: 'उषा देवी', gender: 'Female', village: 'Kochas', regular: true, joinDate: '2019-10-15', milkQuantity: '25 L/day' },
    { id: 19, name: 'नरेश कुमार', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2018-11-30', milkQuantity: '31 L/day' },
    { id: 20, name: 'कविता देवी', gender: 'Female', village: 'Dinara', regular: false, joinDate: '2021-05-20', milkQuantity: '13 L/day' },
    { id: 21, name: 'अरुण सिंह', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2018-04-12', milkQuantity: '26 L/day' },
    { id: 22, name: 'सुमित्रा देवी', gender: 'Female', village: 'Indour', regular: true, joinDate: '2020-02-28', milkQuantity: '22 L/day' },
    { id: 23, name: 'पवन कुमार', gender: 'Male', village: 'Kochas', regular: false, joinDate: '2021-08-05', milkQuantity: '19 L/day' },
    { id: 24, name: 'रेखा देवी', gender: 'Female', village: 'Delhuan', regular: true, joinDate: '2019-01-18', milkQuantity: '24 L/day' },
    { id: 25, name: 'सुनील सिंह', gender: 'Male', village: 'Dinara', regular: true, joinDate: '2018-08-25', milkQuantity: '28 L/day' },
    { id: 26, name: 'सरस्वती देवी', gender: 'Female', village: 'Indour', regular: false, joinDate: '2020-12-10', milkQuantity: '16 L/day' },
    { id: 27, name: 'रविंद्र कुमार', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2019-04-08', milkQuantity: '27 L/day' },
    { id: 28, name: 'लक्ष्मी देवी', gender: 'Female', village: 'Kochas', regular: true, joinDate: '2018-10-15', milkQuantity: '23 L/day' },
    { id: 29, name: 'महेश सिंह', gender: 'Male', village: 'Dinara', regular: false, joinDate: '2021-07-22', milkQuantity: '18 L/day' },
    { id: 30, name: 'पूजा देवी', gender: 'Female', village: 'Delhuan', regular: true, joinDate: '2020-05-18', milkQuantity: '21 L/day' },
    { id: 31, name: 'अजय कुमार', gender: 'Male', village: 'Indour', regular: true, joinDate: '2018-06-12', milkQuantity: '29 L/day' },
    { id: 32, name: 'रानी देवी', gender: 'Female', village: 'Kochas', regular: false, joinDate: '2021-04-28', milkQuantity: '15 L/day' },
    { id: 33, name: 'विनोद सिंह', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2019-09-05', milkQuantity: '26 L/day' },
    { id: 34, name: 'सुशीला देवी', gender: 'Female', village: 'Dinara', regular: true, joinDate: '2018-12-20', milkQuantity: '24 L/day' },
    { id: 35, name: 'संदीप कुमार', gender: 'Male', village: 'Indour', regular: false, joinDate: '2020-10-15', milkQuantity: '17 L/day' },
    { id: 36, name: 'मंजू देवी', gender: 'Female', village: 'Delhuan', regular: true, joinDate: '2019-07-30', milkQuantity: '22 L/day' },
    { id: 37, name: 'प्रकाश सिंह', gender: 'Male', village: 'Kochas', regular: true, joinDate: '2018-03-18', milkQuantity: '30 L/day' },
    { id: 38, name: 'सविता देवी', gender: 'Female', village: 'Dinara', regular: false, joinDate: '2021-02-12', milkQuantity: '14 L/day' },
    { id: 39, name: 'मुकेश कुमार', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2020-01-08', milkQuantity: '25 L/day' },
    { id: 40, name: 'नीरा देवी', gender: 'Female', village: 'Indour', regular: true, joinDate: '2019-05-25', milkQuantity: '23 L/day' },
    { id: 41, name: 'राकेश सिंह', gender: 'Male', village: 'Kochas', regular: false, joinDate: '2020-08-18', milkQuantity: '19 L/day' },
    { id: 42, name: 'गायत्री देवी', gender: 'Female', village: 'Delhuan', regular: true, joinDate: '2018-11-05', milkQuantity: '26 L/day' },
    { id: 43, name: 'सुधीर कुमार', gender: 'Male', village: 'Dinara', regular: true, joinDate: '2019-12-20', milkQuantity: '28 L/day' },
    { id: 44, name: 'कुसुम देवी', gender: 'Female', village: 'Indour', regular: false, joinDate: '2021-06-08', milkQuantity: '16 L/day' },
    { id: 45, name: 'हरीश सिंह', gender: 'Male', village: 'Delhuan', regular: true, joinDate: '2018-07-22', milkQuantity: '27 L/day' },
    { id: 46, name: 'सुमा देवी', gender: 'Female', village: 'Kochas', regular: true, joinDate: '2020-03-15', milkQuantity: '24 L/day' },
    { id: 47, name: 'जगदीश कुमार', gender: 'Male', village: 'Dinara', regular: false, joinDate: '2021-01-28', milkQuantity: '18 L/day' },
    { id: 48, name: 'शकुंतला देवी', gender: 'Female', village: 'Delhuan', regular: true, joinDate: '2019-08-12', milkQuantity: '25 L/day' },
    { id: 49, name: 'भरत सिंह', gender: 'Male', village: 'Indour', regular: true, joinDate: '2018-09-30', milkQuantity: '29 L/day' },
    { id: 50, name: 'चंद्रा देवी', gender: 'Female', village: 'Kochas', regular: false, joinDate: '2020-11-25', milkQuantity: '15 L/day' }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.village.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || 
                         (filterStatus === 'Regular' && user.regular) ||
                         (filterStatus === 'Irregular' && !user.regular);
    return matchesSearch && matchesFilter;
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const regularCount = users.filter(user => user.regular).length;
  const irregularCount = users.filter(user => !user.regular).length;

  return (
    <section id="users-table" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            डेयरी सदस्य सूची
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            हमारे 50+ पंजीकृत किसान सदस्यों की संपूर्ण जानकारी और उनकी नियमित गतिविधियों का विवरण
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 animate-fade-left">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-primary">{users.length}</h3>
              <p className="text-muted-foreground">कुल सदस्य</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-green-600">{regularCount}</h3>
              <p className="text-muted-foreground">नियमित सदस्य</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <XCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-orange-600">{irregularCount}</h3>
              <p className="text-muted-foreground">अनियमित सदस्य</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="shadow-lg border-0 mb-8 animate-fade-right">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-poppins text-primary">
              <Search className="mr-3 h-5 w-5" />
              खोजें और फ़िल्टर करें
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="नाम या गाँव से खोजें..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'All' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('All')}
                  className={filterStatus === 'All' ? 'premium-gradient text-white' : ''}
                >
                  सभी
                </Button>
                <Button
                  variant={filterStatus === 'Regular' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('Regular')}
                  className={filterStatus === 'Regular' ? 'premium-gradient text-white' : ''}
                >
                  नियमित
                </Button>
                <Button
                  variant={filterStatus === 'Irregular' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('Irregular')}
                  className={filterStatus === 'Irregular' ? 'premium-gradient text-white' : ''}
                >
                  अनियमित
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="shadow-lg border-0 animate-fade-up">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/5">
                    <TableHead className="font-poppins font-semibold">प्रोफ़ाइल</TableHead>
                    <TableHead className="font-poppins font-semibold">नाम</TableHead>
                    <TableHead className="font-poppins font-semibold">लिंग</TableHead>
                    <TableHead className="font-poppins font-semibold">गाँव</TableHead>
                    <TableHead className="font-poppins font-semibold">स्थिति</TableHead>
                    <TableHead className="font-poppins font-semibold">दैनिक दूध</TableHead>
                    <TableHead className="font-poppins font-semibold">सदस्यता</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user, index) => (
                    <TableRow key={user.id} className="hover:bg-secondary/20">
                      <TableCell>
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={`/api/placeholder/40/40`} alt={user.name} />
                          <AvatarFallback className="text-sm bg-primary text-white">
                            {getInitials(user.name)}
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={user.gender === 'Male' ? 'text-blue-600' : 'text-pink-600'}>
                          {user.gender === 'Male' ? 'पुरुष' : 'महिला'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                          {user.village}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.regular ? 'default' : 'secondary'} className={
                          user.regular 
                            ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                            : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                        }>
                          {user.regular ? (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              नियमित
                            </>
                          ) : (
                            <>
                              <XCircle className="h-3 w-3 mr-1" />
                              अनियमित
                            </>
                          )}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono">{user.milkQuantity}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(user.joinDate).toLocaleDateString('hi-IN')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">कोई सदस्य नहीं मिला। कृपया अपनी खोज बदलें।</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UsersTable;