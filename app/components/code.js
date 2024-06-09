import Image from 'next/image'
import React from 'react'
import cd1 from "@/public/images/cd1.png"
import cd2 from "@/public/images/cd2.png"
import cd3 from "@/public/images/cd3.png"
import cd4 from "@/public/images/cd4.png"
import cd5 from "@/public/images/cd5.png"
import cd6 from "@/public/images/cd6.png"
import cd7 from "@/public/images/cd7.png"
import cd8 from "@/public/images/cd8.png"
import cd9 from "@/public/images/cd9.png"
import cd10 from "@/public/images/cd10.png"
import cd11 from "@/public/images/cd11.png"
import Grey from '@/public/icons/grey'


const Code1 = () => {
    return (
        <div>
            <div className='flex px-[3rem] items-start pt-16 gap-52 relative bg-[#101010]' >
                <div className="text-[40px] font-Avant fontstyle font-bold text-[#FFFFFF] w-min sticky top-32 pb-[20rem]  ">
                    Explaination of code
                </div>
                <div className='w-[55%]'>
                    <div className='pb-28'>
                        <div><Image src={cd1} alt='' /></div>
                        <div className='flex items-start gap-1 pt-12'>
                            <div className='pt-0.5'><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line is a comment indicating that the following code is part of the ‘models.py’ file within the ‘tasks’ app or module.</div>
                        </div>
                    </div>
                    <div className='py-10 pb-28'>
                        <div><Image src={cd2} alt='' /></div>
                        <div className='flex gap-1 items-center font-Matter font-medium text-[16px] text-[#D0D0D0] pt-12 '>
                            <div><Grey /></div>
                            <div className=''>These lines import necessary modules from Django.</div>
                        </div>
                        <div className='flex items-start  gap-1 pl-8 pt-3 w-[80%]'>
                            <div className='h-1 w-1 mt-3 rounded-full bg-white'></div>
                            <div>models’ module contains the tools needed to create and interact with database models.</div>
                        </div>
                        <div className='flex  gap-1 pl-8 pt-3 w-[80%]'>
                            <div className='h-1 w-1 mt-3 rounded-full bg-white'></div>
                            <div>   User’ model from ‘django.contrib.auth.models’ represents a user in the authentication system.</div>
                        </div>

                    </div>
                    <div className='pt-10 pb-40'>
                        <div><Image src={cd3} alt='' /></div>
                        <div className='flex gap-1 pt-12'>
                            <div><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line defines a new Django model named ‘Task’. A model in Django represents a database table, and each model class corresponds to a database table.</div>
                        </div>
                    </div>
                    <div className='pt-10 pb-40'>
                        <div><Image src={cd4} alt='' /></div>
                        <div className='flex gap-1 pt-12'>
                            <div><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line defines a field named ‘title’ of type ‘CharField’, which represents a string field with a maximum length of 100 characters.</div>
                        </div>
                    </div>
                    <div className='pt-10 pb-40'>
                        <div><Image src={cd6} alt='' /></div>
                        <div className='flex gap-1 pt-12'>
                            <div><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line defines a field named ‘description’ of type ‘TextField’, which represents a text field for longer descriptions.</div>
                        </div>
                    </div>
                    <div className='pt-10 pb-40'>
                        <div><Image src={cd7} alt='' /></div>
                        <div className='flex gap-1 pt-12'>
                            <div><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line defines a field named ‘priority’ of type ‘CharField’, which represents a string field with a maximum length of 20 characters. It is typically used to indicate the priority level of the task.</div>
                        </div>
                    </div>
                    <div className='pt-10 pb-40'>
                        <div><Image src={cd8} alt='' /></div>
                        <div className='flex gap-1 pt-12'>
                            <div><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line defines a field named ‘deadline’ of type ‘DateField’, which represents a date field. It is used to store the deadline for completing the task.</div>
                        </div>
                    </div>
                    <div className=' pt-10 pb-40'>
                        <div><Image src={cd9} alt='' /></div>
                        <div className='flex gap-1 pt-12'>
                            <div><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line defines a field named ‘category’ of type ‘CharField’, which represents a string field with a maximum length of 50 characters. It is used to categorize tasks into different groups or types.</div>
                        </div>
                    </div>
                    <div className='pt-10 pb-40'>
                        <div><Image src={cd10} alt='' /></div>
                        <div className='flex gap-1 pt-12'>
                            <div><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line defines a field named ‘user’ of type ‘ForeignKey</div>
                        </div>
                        <div className='flex items-start  gap-1.5 pl-8 pt-3 w-[80%]'>
                            <div className='h-1 w-1 mt-3 rounded-full bg-white'></div>
                            <div>‘ForeignKey’ establishes a many-to-one relationship between the ‘Task’ model and the ‘User’ model, indicating that each task belongs to a single user.</div>
                        </div>
                        <div className='flex items-start  gap-1.5 pl-8 pt-3 w-[80%]'>
                            <div className='h-1 w-1 mt-3 rounded-full bg-white'></div>
                            <div>‘User’ model is imported from ‘django.contrib.auth.models’.</div>
                        </div>
                        <div className='flex items-start  gap-1.5 pl-8 pt-3 w-[80%]'>
                            <div className='h-1 w-1 mt-3 rounded-full bg-white'></div>
                            <div>‘on_delete=models.CASCADE’ specifies the behavior to adopt when the referenced user is deleted. In this case, it means that if a user is deleted, all associated tasks will also be deleted.</div>
                        </div>
                    </div>
                    <div className='pt-10 pb-40'>
                        <div><Image src={cd11} alt='' /></div>
                        <div className='flex gap-1 pt-12'>
                            <div><Grey /></div>
                            <div className=' font-Matter font-medium text-[16px] text-[#D0D0D0] w-[80%]'>This line defines a __str__ method for the Task model.</div>

                        </div>
                        <div className='flex items-start  gap-1.5 pl-8 pt-3 w-[80%]'>
                            <div className='h-1 w-1 mt-3 rounded-full bg-white'></div>
                            <div>This method returns a string representation of the task object, which is the title of the task.</div>
                        </div>
                        <div className='flex items-start  gap-1.5 pl-8 pt-3 w-[80%]'>
                            <div className='h-1 w-1 mt-3 rounded-full bg-white'></div>
                            <div>This is useful for displaying human-readable representations of tasks in Django admin and other contexts</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Code1